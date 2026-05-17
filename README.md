# Email Summarizer

Paste a long email and get bullet points, action items, and deadlines using the OpenAI API.

## Prerequisites

- Node.js 20+
- An [OpenAI API key](https://platform.openai.com/api-keys)

## Setup

```bash
cd backend
cp .env.example .env
# Edit .env and set OPENAI_API_KEY
npm install

cd ../frontend
npm install
```

## Run the app

Use two terminals.

**Terminal 1 — API**

```bash
cd backend
npm run dev
```

**Terminal 2 — UI**

```bash
cd frontend
npm start
```

Open http://localhost:4200. The UI calls the API at http://localhost:3000.

## Environment variables

| Variable         | Description                          |
| ---------------- | ------------------------------------ |
| `OPENAI_API_KEY` | Required for summarization           |
| `OPENAI_MODEL`   | Model name (default: `gpt-4o-mini`)  |
| `PORT`           | API port (default: `3000`)           |
