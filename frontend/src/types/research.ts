export interface WorkflowRequest {
    goal: string;
}

export interface ResearchPlan {
    title: string;
    objective: string;
    keywords: string[];
    steps: string[];
    constraints: string[];
}

export interface PaperResearchResult {
    paper_title: string;
    authors: string[];
    training: string;
    benchmarks: string[];
    references: string[];
}

export interface CodeResearchResult {
    repository: string;
    repository_url: string;
    architecture: string;
}

export interface ResearchResult {
    paper_title: string;
    authors: string[];
    repository: string;
    repository_url: string;
    architecture: string;
    training: string;
    benchmarks: string[];
    references: string[];
}

export interface WorkflowResponse {
    goal: string;
    research_plan: ResearchPlan;
    research_findings: ResearchResult;
    report: string;
}

export interface HistoryItem {
    id: string;
    createdAt: string;
    response: WorkflowResponse;
}