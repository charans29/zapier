# Asynchronous Event-Driven Microservices Platform

## Overview
This platform is a distributed, event-driven system designed to automate tasks and integrate services in real-time. It mimics the functionality of Zapier with added capabilities for email dispatch and Solana blockchain transactions, exploiting a microservices architecture.

### Description of Project Structure

- **`backend`**: Contains the business logic and APIs that power the core functionalities of the application. It includes the main source code, configuration files, and tests for server-side operations.

- **`frontend`**: Hosts the user interface code that interacts with end users. It includes static files, the main application code, and testing setups for the front-end experience.

- **`hooks`**: Manages the Webhook API integration, allowing the application to communicate with external services and trigger workflows based on events.

- **`prisma`**: Utilizes Prisma ORM for handling database operations, including schema definitions and database migrations for seamless data management.

- **`processor`**: Implements the Kafka producer service that publishes messages to Kafka topics for asynchronous task execution.

- **`worker`**: Executes background tasks by consuming messages from Kafka, processing tasks such as sending emails and handling Solana transactions.

## Getting Started

### Prerequisites
- Node.js
- Docker
- PostgreSQL
- Kafka

### Clone the Repository
```bash
git clone <repository-url>

cd <repository-path>

```

Install Dependencies

```bash
npm install
```

Set Up PostgreSQL with Docker

```bash
docker run -p 5433:5432 -e POSTGRES_PASSWORD=mysecretpassword postgres
```

Database Migrations with Prisma
```bash
npx prisma migrate dev
```
Visualize Database with Prisma Studio

```bash
npx prisma studio
```
Connect to Kafka Locally
```bash
docker run -p 9092:9092 apache/kafka:3.7.1
```
Check Kafka Cluster
```bash
docker ps

#Access Kafka Cluster
#Replace <Cluster_id> with the actual instance ID from the docker ps output.
docker exec -it <Cluster_id> /bin/bash

#Create Kafka Topic
cd opt/kafka/bin/

./kafka-topics.sh --create --topic zap-events --bootstrap-server localhost:9092
```
Start Producer Service
```bash
cd processor

npm run start
```

Start Consumer Service
```bash
cd worker

npm run start
```
Start Back-End Service
```bash
cd backend

npm run start
```

Start Front-End Service
```bash
cd frontend

npm run dev
```

Environment Setup for Worker
Create a .env file in the worker directory with the following content:
```bash
SK="YOUR_PRIV_KEY"
PK="YOUR_PUB_KEY"
SMTP_USERNAME="your_email@example.com"
SMTP_PASSWORD="your_smtp_password"
SMTP_ENDPOINT="smtp_endpoint_port"
```
Replace the placeholders with your actual Solana private key (YOUR_PRIV_KEY), public key (YOUR_PUB_KEY), email credentials, and SMTP endpoint information.

`Usage`
After setting up the environment, you can sign up, log in, and create "zaps" by triggering webhooks and configuring actions.
