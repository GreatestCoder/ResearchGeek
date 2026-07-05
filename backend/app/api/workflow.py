from fastapi import APIRouter
from pydantic import BaseModel
from agents import Runner
from app.agents.planner import planner_agent
from app.agents.paper_researcher import paper_research_agent
from app.agents.code_researcher import code_research_agent
from app.mcp.servers import deepwiki_server, arxiv_server, github_server
from app.models.research_model import ResearchPlan, ResearchResult
from app.agents.writer import writer_agent
from app.core.logger import Timer
import asyncio


router = APIRouter(prefix="/workflow", tags=["Workflow"])

class WorkflowRequest(BaseModel):
    goal: str

@router.post("")
async def run_workflow(request: WorkflowRequest):
    async with deepwiki_server, arxiv_server, github_server:
        planner = planner_agent.create_agent()
        with Timer("Planner"):
            planner_result = await Runner.run(planner, request.goal, max_turns=10)

        research_plan: ResearchPlan = planner_result.final_output
        paper_agent = paper_research_agent.create_agent(mcp_servers=[arxiv_server])
        code_agent = code_research_agent.create_agent(mcp_servers=[github_server, deepwiki_server])
        with Timer("Parallel Research"):
            paper_result, code_result = await asyncio.gather(Runner.run(paper_agent, request.goal, max_turns=15), Runner.run(code_agent, request.goal, max_turns=15))

        research_result = ResearchResult(
            paper_title=paper_result.final_output.paper_title,
            authors=paper_result.final_output.authors,
            repository=code_result.final_output.repository,
            repository_url=code_result.final_output.repository_url,
            architecture=code_result.final_output.architecture,
            training=paper_result.final_output.training,
            benchmarks=paper_result.final_output.benchmarks,
            references=paper_result.final_output.references,
        )
        
        writer = writer_agent.create_agent()
        with Timer("Writer"):
            writer_result = await Runner.run(writer, research_result.model_dump_json(indent=2), max_turns=5)
        
    return {"goal": request.goal, "research_plan": research_plan, "research_findings": research_result, "report": writer_result.final_output}