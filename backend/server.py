from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime
from contextlib import asynccontextmanager
from email_utils import send_email_alert


# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB config
mongo_url = os.environ['MONGO_URL']
db_name = os.environ['DB_NAME']

# Global DB client and DB reference
client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# Define lifespan handler
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup logic (optional)
    yield
    # Shutdown logic
    client.close()

# Create FastAPI app with lifespan
app = FastAPI(lifespan=lifespan)

# Create router
api_router = APIRouter(prefix="/api")

# Define models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form API Endpoint
class ContactMessage(BaseModel):
    name: str
    email: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

# API routes
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/contact", response_model=ContactMessage)
async def submit_contact(message: ContactMessage):
    await db.contact_messages.insert_one(message.dict())

    # ✅ Trigger email alert
    send_email_alert(message.name, message.email, message.message)
    
    return message

# Register router
app.include_router(api_router)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=[
        "http://localhost:3000",
        "https://pascalattama.netlify.app"
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging config
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8000)