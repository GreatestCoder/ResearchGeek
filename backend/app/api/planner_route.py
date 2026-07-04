from fastapi import APIRouter
from pydantic import BaseModel
from agents import Runner
from app.agents.planner import planner_agent
from app.mcp.servers import deepwiki_server


router = APIRouter(prefix="/planner", tags=["Planner"])

class PlannerRequest(BaseModel):
    goal: str

@router.post("/")
async def create_plan(request: PlannerRequest):
    async with deepwiki_server:
        agent = planner_agent.create_agent()
        result = await Runner.run(agent, request.goal, max_turns=10)
    return {"plan": result.final_output}