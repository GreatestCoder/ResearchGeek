from agents.mcp import MCPServerStreamableHttp, MCPServerStdio
from app.core.config import settings

deepwiki_server = MCPServerStreamableHttp(name="DeepWiki", params={"url": "https://mcp.deepwiki.com/mcp"}, cache_tools_list=True)
arxiv_server = MCPServerStdio(name="arxiv", params={"command": "uvx", "args": ["arxiv-mcp-server"]}, cache_tools_list=True, client_session_timeout_seconds=30)
github_server = MCPServerStreamableHttp(name="GitHub", params={"url": "https://api.githubcopilot.com/mcp/", "headers": {"Authorization": f"Bearer {settings.GITHUB_TOKEN}"}}, cache_tools_list=True)