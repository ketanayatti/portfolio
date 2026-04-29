from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import contact

app = FastAPI(title="Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://yourdomain.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.router, prefix="/api")


@app.get("/health")
async def health():
    return {"status": "ok"}
