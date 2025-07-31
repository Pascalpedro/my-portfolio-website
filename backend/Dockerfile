# backend/Dockerfile
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy only requirements and install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application
COPY . /app/

# Expose the default FastAPI port
EXPOSE 8000

# Start Uvicorn server
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]
