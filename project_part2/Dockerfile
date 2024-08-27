# Dockerfile for book_catalog microservice
FROM python:3.9-slim

WORKDIR /app
COPY book_catalog/requirements.txt .

RUN pip install -r requirements.txt
COPY ./book_catalog/ .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
