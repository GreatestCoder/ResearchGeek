"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useResearchStore } from "@/store/researchStore";
import Report from "@/components/Report";
import ResearchFindings from "@/components/ResearchFindings";
import HistoryPanel from "@/components/HistoryPanel";
import LoadingTimeline from "@/components/LoadingTimeline";


export default function Home() {
  const { response, loading, query } = useResearchStore();

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-slate-900 text-zinc-100">
      <Navbar />
      <Hero />
      <LoadingTimeline loading={loading} query={query} />

      {response ? (
        <div className="mx-auto mt-12 flex max-w-7xl gap-8 px-4">
          <aside className="sticky top-24 h-fit w-80 shrink-0"><HistoryPanel /></aside>
          <div className="flex-1">
            <Report title={response.research_plan.title} report={response.report} />
            <ResearchFindings findings={response.research_findings} />
          </div>
        </div>
      ) : null}
    </main>
  );
}