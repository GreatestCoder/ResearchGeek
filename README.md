# ResearchGeek 🤖

An AI-powered research assistant that automates technical research by
combining planning, academic paper discovery, code repository analysis,
and report generation into a single workflow.

> Built with **FastAPI**, **OpenAI Agents SDK**, **Next.js 15**,
> **TypeScript**, and **MCP Servers**.

------------------------------------------------------------------------

## 🚀 Live Demo

**Frontend:** *Add your Vercel URL here*

**Backend API:** *Add your Railway URL here*

------------------------------------------------------------------------

## ✨ Features

-   🧠 Multi-agent AI research workflow
-   📑 Automatic research planning
-   📚 Academic paper discovery (ArXiv MCP)
-   💻 Official GitHub repository discovery
-   🔍 DeepWiki integration for code understanding
-   ⚡ Parallel research execution
-   📝 AI-generated Markdown research reports
-   📌 Research findings summary
-   📜 Persistent research history
-   📋 One-click report copy
-   ⬇️ Download reports as Markdown
-   🌙 Premium dark UI
-   🎞️ Smooth animations with Framer Motion

------------------------------------------------------------------------

## 🏗️ Architecture

``` text
                User
                  │
                  ▼
        Next.js Frontend (Vercel)
                  │
             REST API
                  │
                  ▼
          FastAPI Backend
                  │
     OpenAI Agents SDK Workflow
                  │
      ┌───────────┴───────────┐
      │                       │
      ▼                       ▼
 Paper Research Agent   Code Research Agent
      │                       │
      └───────────┬───────────┘
                  ▼
            Writer Agent
                  │
                  ▼
        Final Research Report
```

------------------------------------------------------------------------

## 🔄 Workflow

1.  Planner Agent creates a research plan.
2.  Paper Research Agent searches academic literature.
3.  Code Research Agent analyzes official repositories.
4.  Both agents execute in parallel.
5.  Writer Agent combines findings into a structured Markdown report.

------------------------------------------------------------------------

## 🛠️ Tech Stack

### Frontend

-   Next.js 15
-   TypeScript
-   Tailwind CSS
-   shadcn/ui
-   Zustand
-   Axios
-   Framer Motion
-   React Markdown
-   remark-gfm

### Backend

-   FastAPI
-   OpenAI Agents SDK
-   GPT-5-mini
-   Pydantic
-   AsyncIO

### MCP Servers

-   ArXiv
-   GitHub
-   DeepWiki

------------------------------------------------------------------------

## 📂 Project Structure

``` text
ResearchGeek/
│
├── backend/
│   ├── app/
│   ├── api/
│   ├── agents/
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── store/
│   │   ├── types/
│   │   └── ...
│   └── ...
│
└── README.md
```

------------------------------------------------------------------------

## ⚙️ Installation

### Clone

``` bash
git clone https://github.com/<your-username>/researchgeek-ai.git
cd researchgeek-ai
```

### Backend

``` bash
cd backend

python -m venv .venv

# Windows
.venv\Scripts\activate

# Linux / macOS
source .venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

### Frontend

``` bash
cd frontend

npm install

npm run dev
```

------------------------------------------------------------------------


## 📌 Future Improvements

-   Authentication
-   Shareable research reports
-   PDF export
-   Streaming responses
-   Additional MCP integrations

------------------------------------------------------------------------

## 👨‍💻 Author

**Naman Kratos**

If you found this project interesting, consider giving it a ⭐ on
GitHub.
