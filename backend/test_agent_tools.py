from tools import search_internet, search_medium, send_email

def test_search_internet():
    print("Testing search_internet...")
    result = search_internet("Pamudu Ranasinghe AI Engineer")
    print(f"Result: {result[:200]}...") # Print first 200 chars
    assert "Pamudu" in result or "No results" in result
    print("search_internet passed.\n")

def test_search_medium():
    print("Testing search_medium...")
    result = search_medium("Pamudu Ranasinghe")
    print(f"Result: {result[:200]}...")
    assert "Medium" in result or "No articles" in result or "Pamudu" in result
    print("search_medium passed.\n")

def test_send_email():
    print("Testing send_email...")
    result = send_email("test@example.com", "Test Subject", "Test Body")
    print(f"Result: {result}")
    assert "Email successfully sent" in result
    print("send_email passed.\n")

if __name__ == "__main__":
    test_search_internet()
    test_search_medium()
    test_send_email()
    print("All tool tests passed!")
