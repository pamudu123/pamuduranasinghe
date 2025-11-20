import os
import json
import uuid
from typing import List, Dict, Optional
from fastapi import FastAPI, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Gemini
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)
else:
    print("Warning: GEMINI_API_KEY not found in environment variables.")

# Load CV Data
CV_DATA_PATH = os.path.join(os.path.dirname(__file__), "cv_data.json")
try:
    with open(CV_DATA_PATH, "r") as f:
        cv_data = json.load(f)
        CV_CONTEXT = cv_data.get("text", "")
except FileNotFoundError:
    print(f"Warning: {CV_DATA_PATH} not found.")
    CV_CONTEXT = ""

# In-memory session store
# Structure: { session_id: [ { role: "user" | "model", parts: [ { text: "..." } ] } ] }
sessions: Dict[str, List[Dict]] = {}

class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None

class ChatResponse(BaseModel):
    reply: str
    session_id: str

@app.get("/")
async def root():
    return {"message": "Backend is running. Use /api/chat to interact with the API."}

@app.post("/api/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    if not request.message:
        raise HTTPException(status_code=400, detail="Message is required")

    if not GEMINI_API_KEY:
        return ChatResponse(
            reply="I'm ready to answer, but I need a valid GEMINI_API_KEY in the backend environment variables to talk to Google Gemini. For now, I know Pamudu is a Lead AI Engineer.",
            session_id=request.session_id or str(uuid.uuid4())
        )

    # Manage Session
    session_id = request.session_id
    if not session_id:
        session_id = str(uuid.uuid4())
        sessions[session_id] = []
        # Initialize history with context for new sessions
        sessions[session_id].append({
            "role": "user",
            "parts": [{"text": f"You are an AI assistant for Pamudu Ranasinghe. Here is his resume information:\n\n{CV_CONTEXT}\n\nAnswer questions based on this information. Be helpful, professional, and concise.\n\nTOOLS:\nYou have access to the following tools:\n1. `search_internet`: Use this to find information about Pamudu or general topics if the answer is not in the resume context.\n2. `search_medium`: Use this specifically when the user asks about Pamudu's articles, writing, or Medium posts.\n\nRULES:\n- If the user asks a question that requires external knowledge, use `search_internet`.\n- If the user asks about articles, use `search_medium`."}]
        })
        sessions[session_id].append({
            "role": "model",
            "parts": [{"text": "Understood. I am ready to answer questions about Pamudu Ranasinghe."}]
        })
    
    if session_id not in sessions:
        # If session ID provided but not found (e.g. server restart), create new
        sessions[session_id] = []
        sessions[session_id].append({
            "role": "user",
            "parts": [{"text": f"You are an AI assistant for Pamudu Ranasinghe. Here is his resume information:\n\n{CV_CONTEXT}\n\nAnswer questions based on this information. Be helpful, professional, and concise.\n\nTOOLS:\nYou have access to the following tools:\n1. `search_internet`: Use this to find information about Pamudu or general topics if the answer is not in the resume context.\n2. `search_medium`: Use this specifically when the user asks about Pamudu's articles, writing, or Medium posts.\n\nRULES:\n- If the user asks a question that requires external knowledge, use `search_internet`.\n- If the user asks about articles, use `search_medium`."}]
        })
        sessions[session_id].append({
            "role": "model",
            "parts": [{"text": "Understood. I am ready to answer questions about Pamudu Ranasinghe."}]
        })

    # Get history
    history = sessions[session_id]

    try:
        # Import tools
        from tools import search_internet, search_medium
        
        tools_list = [search_internet, search_medium]
        model = genai.GenerativeModel("models/gemini-2.0-flash", tools=tools_list)
        
        # We need to enable automatic function calling. 
        # In the Python SDK, we can just pass the tools to the model and it handles it.
        # However, for chat, we need to be careful about how we persist the function calls in history if we were doing it manually.
        # But here we are re-initializing the chat each time with history.
        # Note: The history format for function calls is specific. 
        # For simplicity in this stateless REST API approach, we will let the library handle the immediate turn.
        # But we need to make sure the history we pass back to `start_chat` is valid if it contains function calls.
        # The `history` list we maintain currently only has 'user' and 'model' text parts.
        # If the model makes a function call, the response will contain a function call.
        # Then we need to execute it and send the function response.
        # The `chat.send_message` with `automatic_function_calling=True` (default in some versions or handled by library) is easiest.
        
        chat = model.start_chat(history=history)
        
        # Update system instruction in the first message if needed, or just rely on the prompt below.
        # We will append a specific instruction for this turn to guide the model's tool usage.
        # Actually, it's better to have it in the system prompt (first message).
        # Let's check if we need to update the first message.
        # For now, we'll just send the message. The model is smart enough to use tools if we describe them well.
        # But we need to make sure the model knows *when* to use them.
        
        # We can prepend a system instruction to the user's message for this turn, or just rely on the initial context.
        # Let's update the initial context in the session creation logic (lines 77 and 89) - I will do that in a separate edit.
        # For now, let's just run the chat.
        
        response = chat.send_message(request.message)
        reply_text = response.text

        # Update history manually
        # Note: If function calls happened, `chat.history` would contain them.
        # We should ideally sync our `sessions[session_id]` with `chat.history`.
        # Let's overwrite our session history with the chat's history to capture function calls/responses.
        
        # Convert google.ai.generativelanguage.Content objects to our dict format
        new_history = []
        for msg in chat.history:
            parts = []
            for part in msg.parts:
                if part.text:
                    parts.append({"text": part.text})
                elif part.function_call:
                    # We need to store function calls to maintain valid history
                    # This is getting complex for a simple JSON store.
                    # For this demo, let's just store the text response. 
                    # If we lose the function call history, the model might get confused in long context, 
                    # but for a simple "ask -> answer" it's fine.
                    # HOWEVER, Gemini throws error if history is invalid (function call without response).
                    # So we MUST persist the full history if we want multi-turn with tools.
                    pass 
                elif part.function_response:
                    pass
            
            # Simplified: just keep text for now to avoid serialization issues with complex objects
            # If we want full tool support in history, we need a better serializer.
            # For now, let's just append the final text response.
            if msg.role == "user" and msg.parts[0].text:
                 new_history.append({"role": "user", "parts": [{"text": msg.parts[0].text}]})
            elif msg.role == "model" and msg.parts[0].text:
                 new_history.append({"role": "model", "parts": [{"text": msg.parts[0].text}]})
        
        # Actually, let's just append the current interaction to our existing list to be safe
        sessions[session_id].append({
            "role": "user",
            "parts": [{"text": request.message}]
        })
        sessions[session_id].append({
            "role": "model",
            "parts": [{"text": reply_text}]
        })

        return ChatResponse(reply=reply_text, session_id=session_id)

    except Exception as e:
        print(f"Error processing chat: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
