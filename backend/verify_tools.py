import sys
import os
from dotenv import load_dotenv

# Add backend to path
sys.path.append(os.path.join(os.getcwd(), 'backend'))

# Load env
load_dotenv("backend/.env")

try:
    from tools import send_email, search_internet, search_medium
    print("✅ Successfully imported tools")
except ImportError as e:
    print(f"❌ Failed to import tools: {e}")
    sys.exit(1)

def test_email_config():
    print("\nTesting Email Configuration...")
    # We expect this to fail with auth error or "not configured" if env vars are empty
    # But since we put placeholders, it might try to login and fail.
    
    recipient = "test@example.com"
    subject = "Test Subject"
    body = "Test Body"
    
    result = send_email(recipient, subject, body)
    print(f"Email Tool Result: {result}")
    
    if "Error sending email" in result and "Username and Password not accepted" in result:
        print("✅ Email tool attempted login (failed as expected with placeholders)")
    elif "Error: Email credentials not configured" in result:
        print("✅ Email tool detected missing credentials")
    elif "Email successfully sent" in result:
        print("⚠️ Email sent? (Unexpected with placeholders)")
    else:
        print(f"ℹ️ Email tool response: {result}")

def test_search():
    print("\nTesting Search Tools...")
    try:
        res = search_internet("Pamudu Ranasinghe")
        if "Error" not in res and len(res) > 0:
            print("✅ Internet search working")
        else:
            print(f"⚠️ Internet search warning: {res}")
            
        res_med = search_medium("Pamudu Ranasinghe")
        if "Error" not in res_med and len(res_med) > 0:
            print("✅ Medium search working")
        else:
            print(f"⚠️ Medium search warning: {res_med}")
    except Exception as e:
        print(f"❌ Search test failed: {e}")

if __name__ == "__main__":
    test_email_config()
    test_search()
