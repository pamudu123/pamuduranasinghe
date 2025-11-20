import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv("backend/.env")

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    print("No API key found")
else:
    genai.configure(api_key=api_key)
    try:
        with open("backend/models.txt", "w") as f:
            for m in genai.list_models():
                if 'generateContent' in m.supported_generation_methods:
                    f.write(m.name + "\n")
        print("Models written to backend/models.txt")
    except Exception as e:
        print(f"Error: {e}")
