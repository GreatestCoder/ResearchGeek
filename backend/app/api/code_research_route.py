from fastapi import APIRouter
from pydantic import BaseModel
from collections import Counter
from agents import Runner
from app.agents.code_researcher import code_research_agent
from app.mcp.servers import github_server, deepwiki_server


router = APIRouter(prefix="/code", tags=["Code Research"])

class CodeRequest(BaseModel):
    topic: str

@router.post("/")
async def code_research(request: CodeRequest):
    async with github_server, deepwiki_server:
        agent = code_research_agent.create_agent(mcp_servers=[github_server, deepwiki_server])
        result = await Runner.run(agent, request.topic, max_turns=15)
    return result.final_output