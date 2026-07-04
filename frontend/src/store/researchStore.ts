import { create } from "zustand";
import toast from "react-hot-toast";
import { WorkflowResponse, HistoryItem } from "@/types/research";
import { runWorkflow } from "@/services/workflow";
import { persist } from "zustand/middleware";


interface ResearchStore {
    query: string;
    loading: boolean;
    response: WorkflowResponse | null;
    history: HistoryItem[];

    setQuery(query: string): void;
    runResearch(): Promise<void>;
    loadHistoryItem(id: string): void;
}

export const useResearchStore = create<ResearchStore>()(persist((set, get) => ({
    query: "",
    loading: false,
    response: null,
    history: [],

    setQuery: (query) => set({ query }),

    runResearch: async () => {
        if (!get().query.trim()) {
            toast.error("Please enter a research topic.");
            return;
        }
        set({ loading: true, response: null });

        try {
            const response = await toast.promise(
                runWorkflow({ goal: get().query }),
                {
                    loading: "ResearchGeek is researching your topic...",
                    success: "Report ready!",
                    error: "Research failed.",
                }
            );

            const historyItem: HistoryItem = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), response };
            set((state) => ({ response, loading: false, history: [historyItem, ...state.history] }));
        } catch {
            set({ loading: false });
        }
    },

    loadHistoryItem: (id) => {
        const item = get().history.find((item) => item.id === id);
        if (!item) return;
        set({ response: item.response, query: item.response.goal });
    }
}),
    {
        name: "research-storage",
        partialize: (state) => ({ response: state.response, history: state.history }),
    }
)
);