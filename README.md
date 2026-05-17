# Email Summarizer Agent

Email Summarizer AI Agent built with Angular frontend and Node.js/Express backend in TypeScript.
The app sends long emails to an OpenAI‑powered agent that returns a concise bullet‑point summary,
action items, and key deadlines.

## Stack

- **Frontend:** Angular (TypeScript)
- **Backend:** Node.js + Express (TypeScript)
- **AI:** OpenAI Agents SDK (GPT model)
- **Architecture:** SPA + REST API

## Project structure

- `frontend/` – Angular app with summary form and service
  - `src/app/components/summary-form`
  - `src/app/services/summary.service`
- `backend/` – Express TypeScript API
  - `src/app.ts` – main server file
  - `src/controllers/summarizer.controller.ts`
  - `src/routes/summarizer.routes.ts`

## Installation

### 1. Backend (Node/Express TypeScript)

```bash
cd backend
npm install
```

Create `.env` in `backend/` with your OpenAI key:

```env
OPENAI_API_KEY=sk-...
PORT=3000
```

### 2. Frontend (Angular)

```bash
cd frontend
npm install
```

## Running the app

### 1. Start backend

```bash
cd backend
npm run dev  # or npx tsx src/app.ts
```

### 2. Start frontend

```bash
cd frontend
ng serve
```

Then open `http://localhost:4200` in your browser.

---

_Note: Make sure the backend is running on `http://localhost:3000` so the Angular app can send emails to the summarizer API._

## License

MoSalem149
