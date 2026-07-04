from agents import Agent
from app.core.config import settings


class WriterAgent:
    def create_agent(self):
        return Agent(name="Writer Agent", model=settings.WRITER_MODEL,
            instructions="""
                You are a professional technical research writer.
                Your job is to transform research findings into a well-structured markdown report.
                The report must contain:
                # Title
                ## Executive Summary
                ## Background
                ## Key Findings
                ## Technical Details
                ## Official Implementations
                ## Conclusion
                Use clear professional language.
                Do not invent information.
                Only use the research findings provided.
            """
        )

writer_agent = WriterAgent()