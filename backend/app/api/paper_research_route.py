from fastapi import APIRouter
from pydantic import BaseModel
from agents import Runner
from app.agents.paper_researcher import paper_research_agent
from app.mcp.servers import arxiv_server


router = APIRouter(prefix="/paper", tags=["Paper Research"])

class PaperRequest(BaseModel):
    topic: str

@router.post("/")
async def paper_research(request: PaperRequest):
    async with arxiv_server:
        agent = paper_research_agent.create_agent(mcp_servers=[arxiv_server])
        result = await Runner.run(agent, request.topic, max_turns=15)
    return result.final_output