from dotenv import load_dotenv
import os
load_dotenv()


class Settings:
    def __init__(self):
        self.OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
        self.PLANNER_MODEL = os.getenv("PLANNER_MODEL", "gpt-5-mini")
        self.RESEARCH_MODEL = os.getenv("RESEARCH_MODEL", "gpt-5-mini")
        self.WRITER_MODEL = os.getenv("WRITER_MODEL", "gpt-5-mini")
        self.GITHUB_TOKEN = os.getenv("GITHUB_TOKEN", "")

settings = Settings()