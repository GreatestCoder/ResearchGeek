import SearchBox from "./SearchBox";


export default function Hero() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl">ResearchGeek</h1>

      <p className="mt-6 max-w-2xl text-lg text-zinc-400">
        AI-powered research assistant that analyzes research papers, official
        implementations, and benchmarks to generate comprehensive research
        reports.
      </p>

      <div className="mt-12 w-full">
        <SearchBox />
      </div>
    </section>
  );
}