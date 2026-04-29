from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from datetime import datetime
import os

router = APIRouter()


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str


# Simple in-memory rate limiting
_rate_limit: dict[str, datetime] = {}


@router.post("/contact")
async def send_contact(form: ContactForm):
    # Sanitize
    if len(form.name) > 100 or len(form.message) > 5000:
        raise HTTPException(status_code=400, detail="Input too long")

    # In production: send email via SMTP
    # smtp_host = os.getenv("SMTP_HOST")
    # smtp_user = os.getenv("SMTP_USER")
    # smtp_pass = os.getenv("SMTP_PASS")

    print(f"[Contact] {form.name} ({form.email}): {form.message[:100]}...")

    return {"success": True, "message": "Message received!"}
