from agents import Agent
from app.core.config import settings
from app.models.research_model import CodeResearchResult


class CodeResearchAgent:
    def create_agent(self, mcp_servers=None):
        return Agent(name="Code Research Agent", model=settings.RESEARCH_MODEL,
            instructions="""
                You are an expert software research assistant.
                Your ONLY responsibility is to analyze the official implementation.
                Use GitHub first.
                Use DeepWiki only if the README does not provide enough information.

                Rules:
                - Search for the official repository.
                - Read the README first.
                - Inspect source files ONLY if absolutely necessary.
                - Read the minimum number of files.
                - Ignore papers.
                - Ignore authors.
                - Ignore benchmarks.
                - Ignore training details.

                Return only the CodeResearchResult object.

                Architecture:
                - Maximum 5 bullet points.
                - Do not copy source code.
                - Summarize the implementation.
            """,
            output_type=CodeResearchResult,
            mcp_servers=mcp_servers or [],
        )

code_research_agent = CodeResearchAgent()