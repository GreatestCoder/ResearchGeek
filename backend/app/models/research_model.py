from pydantic import BaseModel, Field


class ResearchPlan(BaseModel):
    title: str = Field(description="Title of the research topic")
    objective: str = Field(description="Overall research objective")
    keywords: list[str] = Field(description="Important keywords for searching")
    steps: list[str] = Field(description="Ordered research steps")
    constraints: list[str] = Field(description="Constraints that must be followed during research")


class PaperResearchResult(BaseModel):
    paper_title: str
    authors: list[str]
    training: str
    benchmarks: list[str]
    references: list[str]


class CodeResearchResult(BaseModel):
    repository: str
    repository_url: str
    architecture: str


class ResearchResult(BaseModel):
    paper_title: str
    authors: list[str]
    repository: str
    repository_url: str
    architecture: str
    training: str
    benchmarks: list[str]
    references: list[str]