"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Search } from "lucide-react";
import { useResearchStore } from "@/store/researchStore";


export default function SearchBox() {
  const { query, setQuery, runResearch, loading } = useResearchStore();
  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!query.trim() || loading) return;
      runResearch();
    }
  };

  return (
    <Card className="mx-auto w-full max-w-3xl rounded-2xl border-zinc-800 bg-zinc-900 p-5 shadow-xl">
      <Textarea value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={onKeyDown}
        placeholder="Research Microsoft's Phi-4 model, its architecture, training methodology, benchmarks, and official implementation..."
        className="min-h-36 resize-none border-0 bg-transparent p-0 text-base text-zinc-100 placeholder:text-zinc-500 shadow-none focus-visible:ring-0" />

      <div className="mt-5 flex justify-end">
        <Button size="lg" className="gap-2 rounded-xl px-6" onClick={runResearch} disabled={loading || !query.trim()}>
          <Search className="h-4 w-4" />
          {loading ? "Researching..." : "Research"}
        </Button>
      </div>
    </Card>

  );
}