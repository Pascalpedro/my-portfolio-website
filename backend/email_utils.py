# backend/email_utils.py
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from dotenv import load_dotenv
from pathlib import Path

# Load env variables from .env
load_dotenv(Path(__file__).resolve().parent / ".env")

def send_email_alert(name: str, email: str, message: str):
    # Plain-text fallback
    plain_text = f"""
    📬 New Contact Form Submission:
    --------------------------------
    Name: {name}
    Email: {email}
    Message: {message}
    """

    # HTML content for formatting
    html_content = f"""
    <html>
    <body style="font-family: Arial, sans-serif; color: #333;">
        <h2>📬 New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%;">
            <tr>
                <td style="padding: 8px; font-weight: bold;">Name:</td>
                <td style="padding: 8px;">{name}</td>
            </tr>
            <tr>
                <td style="padding: 8px; font-weight: bold;">Email:</td>
                <td style="padding: 8px;">{email}</td>
            </tr>
            <tr>
                <td style="padding: 8px; font-weight: bold;">Message:</td>
                <td style="padding: 8px; white-space: pre-wrap;">{message}</td>
            </tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #666;">
            This email was sent automatically from your portfolio site contact form.
        </p>
    </body>
    </html>
    """

    mail = Mail(
        from_email=os.getenv("FROM_EMAIL"),
        to_emails=os.getenv("TO_EMAIL"),
        subject="📨 New Contact Form Submission",
        plain_text_content=plain_text,
        html_content=html_content
    )

    try:
        sg = SendGridAPIClient(api_key=os.getenv("SENDGRID_API_KEY"))
        response = sg.send(mail)
        print(f"✅ Email sent. Status Code: {response.status_code}")
        return True
    except Exception as e:
        print(f"❌ Failed to send email: {e}")
        return False
