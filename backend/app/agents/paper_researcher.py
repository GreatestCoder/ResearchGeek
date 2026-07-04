from agents import Agent
from app.core.config import settings
from app.models.research_model import PaperResearchResult


class PaperResearchAgent:
    def create_agent(self, mcp_servers=None):
        return Agent(name="Paper Research Agent", model=settings.RESEARCH_MODEL,
            instructions="""
                You are an expert AI research assistant.

                Your ONLY responsibility is to gather information from academic papers.

                Use ONLY arXiv.

                Rules:
                - Perform one search.
                - If the paper is found, stop searching.
                - Prefer the abstract.
                - Download the paper only if necessary.
                - Ignore implementation details.
                - Ignore GitHub repositories.
                - Ignore source code.

                Return only the PaperResearchResult object.
            """,
            output_type=PaperResearchResult,
            mcp_servers=mcp_servers or [],
        )

paper_research_agent = PaperResearchAgent()