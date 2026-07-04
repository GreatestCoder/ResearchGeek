from fastapi import FastAPI
from app.api.health_route import router as health_router
from app.api.planner_route import router as planner_router
from app.api.paper_research_route import router as paper_research_router
from app.api.code_research_route import router as code_research_router
from app.api.workflow import router as workflow_router
from agents import set_tracing_disabled
set_tracing_disabled(True)
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="ResearchGeek", description="Autonomous Research Scientist using OpenAI Agents SDK and MCP", version="0.1.0")

app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:3000"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

app.include_router(health_router)
app.include_router(planner_router)
app.include_router(paper_research_router)
app.include_router(code_research_router)
app.include_router(workflow_router)


@app.get("/")
async def root():
    return {"message": "Welcome to ResearchOS 🚀"}