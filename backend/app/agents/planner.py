from agents import Agent
from app.core.config import settings
from app.models.research_model import ResearchPlan


class PlannerAgent:
    def create_agent(self, mcp_servers=None):
        return Agent(name="Planner Agent", model=settings.PLANNER_MODEL,
            instructions="""
                You are an AI Research Planner.
                Convert the user's request into a structured ResearchPlan.

                Generate:
                - A concise research title.
                - A clear research objective.
                - Relevant search keywords.
                - Ordered research steps.
                - Research constraints.

                Constraints should emphasize:
                - Prefer recent publications.
                - Prefer peer-reviewed sources.
                - Prefer official implementations.
                - Gather factual information only.

                Do not answer the research question.
                Do not perform research.
                Return only a valid ResearchPlan.
            """,
            output_type=ResearchPlan,
            mcp_servers=mcp_servers or [],
        )

planner_agent = PlannerAgent()