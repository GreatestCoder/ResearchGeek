import apiClient from "@/lib/axios";
import { WorkflowRequest, WorkflowResponse } from "@/types/research";


export async function runWorkflow(request: WorkflowRequest) {
    const response = await apiClient.post("/workflow", request);
    return response.data as WorkflowResponse;
}