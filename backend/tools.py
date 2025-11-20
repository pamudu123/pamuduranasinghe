from duckduckgo_search import DDGS
from typing import Optional

def search_internet(query: str) -> str:
    """
    Searches the internet for the given query using DuckDuckGo.
    Use this tool to find information about Pamudu Ranasinghe or general topics if the answer is not in the resume context.
    """
    print(f"Tool: search_internet called with query='{query}'")
    try:
        results = DDGS().text(query, max_results=3)
        if not results:
            return "No results found."
        
        formatted_results = ""
        for result in results:
            formatted_results += f"Title: {result['title']}\nLink: {result['href']}\nSnippet: {result['body']}\n\n"
        return formatted_results
    except Exception as e:
        return f"Error searching internet: {str(e)}"

def search_medium(query: str) -> str:
    """
    Searches Medium.com for articles related to the query.
    Use this tool specifically when the user asks about Pamudu's articles or writing.
    """
    print(f"Tool: search_medium called with query='{query}'")
    try:
        # Append site:medium.com to the query to restrict results
        search_query = f"site:medium.com {query}"
        results = DDGS().text(search_query, max_results=3)
        if not results:
            return "No articles found on Medium."
        
        formatted_results = ""
        for result in results:
            formatted_results += f"Title: {result['title']}\nLink: {result['href']}\nSnippet: {result['body']}\n\n"
        return formatted_results
    except Exception as e:
        return f"Error searching Medium: {str(e)}"

def send_email(recipient: str, subject: str, body: str) -> str:
    """
    Sends an email to the specified recipient.
    Use this tool ONLY after the user has confirmed they want to send an email.
    """
    print(f"Tool: send_email called with recipient='{recipient}', subject='{subject}'")
    
    import smtplib
    from email.mime.text import MIMEText
    from email.mime.multipart import MIMEMultipart
    import os

    sender_email = os.getenv("EMAIL_USER")
    password = os.getenv("EMAIL_PASSWORD")

    if not sender_email or not password:
        return "Error: Email credentials not configured in backend."

    try:
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = recipient
        msg['Subject'] = subject

        msg.attach(MIMEText(body, 'plain'))

        # Connect to Gmail's SMTP server
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(sender_email, password)
            server.send_message(msg)
        
        return f"Email successfully sent to {recipient} with subject '{subject}'."
    except Exception as e:
        return f"Error sending email: {str(e)}"
