"use client";

import { useResearchStore } from "@/store/researchStore";
import { motion } from "framer-motion";


const fadeIn = {
    initial: { opacity: 0, x: -15 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3 }
}


export default function HistoryPanel() {
    const { history, loadHistoryItem } = useResearchStore();
    if (history.length === 0) {
        return null;
    }

    return (
        <motion.div className="mt-6 p-6" {...fadeIn}>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-zinc-100">📚 Research History</h2>
                </div>

                <div className="mt-4 max-h-[70vh] space-y-3 overflow-y-auto pr-2">
                    {history.map((item) => (
                        <button key={item.id} onClick={() => loadHistoryItem(item.id)}
                            className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-left transition hover:bg-zinc-800">
                            <p className="font-medium text-zinc-100">{item.response.research_plan.title}</p>
                            <p className="mt-1 text-sm text-zinc-400">{new Date(item.createdAt).toLocaleString()}</p>
                        </button>
                    ))}
                </div>

            </div>
        </motion.div>
    );
}