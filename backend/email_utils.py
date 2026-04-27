# backend/email_utils.py
import os
import html
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from dotenv import load_dotenv
from pathlib import Path

# Load env variables from .env
load_dotenv(Path(__file__).resolve().parent / ".env")

SENDGRID_API_KEY = os.environ.get("SENDGRID_API_KEY")
if not SENDGRID_API_KEY:
    raise ValueError("Missing SENDGRID_API_KEY in environment variables or .env file.")

FROM_EMAIL = os.environ.get("FROM_EMAIL")
if not FROM_EMAIL:
    raise ValueError("Missing FROM_EMAIL in environment variables or .env file.")

TO_EMAIL = os.environ.get("TO_EMAIL")
if not TO_EMAIL:
    raise ValueError("Missing TO_EMAIL in environment variables or .env file.")

def send_email_alert(name: str, email: str, message: str):
    safe_name = html.escape(name)
    safe_email = html.escape(email)
    safe_message = html.escape(message)
    # Plain-text fallback
    plain_text = f"""
    📬 New Contact Form Submission:
    --------------------------------
    Name: {safe_name}
    Email: {safe_email}
    Message: {safe_message}
    """

    # HTML content for formatting
    html_content = f"""
    <html>
    <body style="font-family: Arial, sans-serif; color: #333;">
        <h2>📬 New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%;">
            <tr>
                <td style="padding: 8px; font-weight: bold;">Name:</td>
                <td style="padding: 8px;">{safe_name}</td>
            </tr>
            <tr>
                <td style="padding: 8px; font-weight: bold;">Email:</td>
                <td style="padding: 8px;">{safe_email}</td>
            </tr>
            <tr>
                <td style="padding: 8px; font-weight: bold;">Message:</td>
                <td style="padding: 8px; white-space: pre-wrap;">{safe_message}</td>
            </tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #666;">
            This email was sent automatically from your portfolio site contact form.
        </p>
    </body>
    </html>
    """

    mail = Mail(
        from_email=FROM_EMAIL,
        to_emails=TO_EMAIL,
        subject="📨 New Contact Form Submission",
        plain_text_content=plain_text,
        html_content=html_content
    )

    try:
        sg = SendGridAPIClient(api_key=SENDGRID_API_KEY)
        response = sg.send(mail)
        print(f"✅ Email sent. Status Code: {response.status_code}")
        return True
    except Exception as e:
        print(f"❌ Failed to send email: {e}")
        return False
