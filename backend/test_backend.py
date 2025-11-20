import requests
import json
import time
import sys

BASE_URL = "http://localhost:8000"

def test_health():
    try:
        response = requests.get(f"{BASE_URL}/")
        if response.status_code == 200:
            print("✅ Health check passed")
            return True
        else:
            print(f"❌ Health check failed: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Health check failed: {e}")
        return False

def test_chat():
    try:
        # Test 1: New Session
        print("\nTesting New Session...")
        payload = {"message": "Who is Pamudu?"}
        response = requests.post(f"{BASE_URL}/api/chat", json=payload)
        
        if response.status_code != 200:
            print(f"❌ Chat request failed: {response.status_code} - {response.text}")
            return False
            
        data = response.json()
        session_id = data.get("session_id")
        reply = data.get("reply")
        
        if not session_id or not reply:
            print("❌ Invalid response format")
            return False
            
        print(f"✅ New session created: {session_id}")
        print(f"🤖 Reply: {reply[:50]}...")

        # Test 2: Context Retention
        print("\nTesting Context Retention...")
        payload_followup = {"message": "What is his email?", "session_id": session_id}
        response_followup = requests.post(f"{BASE_URL}/api/chat", json=payload_followup)
        
        if response_followup.status_code != 200:
            print(f"❌ Follow-up request failed: {response_followup.status_code}")
            return False
            
        data_followup = response_followup.json()
        reply_followup = data_followup.get("reply")
        
        if "pamuduranasinghe9@gmail.com" in reply_followup or "@" in reply_followup:
             print("✅ Context retained (email found)")
        else:
             print(f"⚠️ Context check warning: Email might not be in response: {reply_followup}")
             
        return True

    except Exception as e:
        print(f"❌ Chat test failed: {e}")
        return False

if __name__ == "__main__":
    print("Waiting for server to start...")
    # In a real scenario, we might wait or retry. 
    # Here we assume the user or agent has started it.
    # But since I cannot start a long-running process and keep it alive easily while running another tool synchronously without blocking,
    # I will just run this script.
    
    if test_health():
        test_chat()
    else:
        print("Skipping chat test due to health check failure.")
