import { ResearchResult } from "../types/research";
import { motion } from "framer-motion";


interface ResearchFindingsProps {
    findings: ResearchResult;
}

const fadeIn = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.1, duration: 0.3 }
}


export default function ResearchFindings({ findings }: ResearchFindingsProps) {
    return (
        <motion.section className="mt-10 w-full max-w-4xl mx-auto px-4" {...fadeIn}>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
                <h2 className="mb-6 text-2xl font-bold text-zinc-100"> 📚 Research Findings </h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold text-zinc-100">Paper</h3>
                        <p className="text-zinc-300">{findings.paper_title}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-zinc-100">Authors</h3>
                        <p className="text-zinc-300">{findings.authors.join(", ")}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-zinc-100">Repository</h3>
                        <a href={findings.repository_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                            {findings.repository}
                        </a>
                    </div>
                    <div>
                        <h3 className="font-semibold text-zinc-100">Architecture</h3>
                        <p className="text-zinc-300">{findings.architecture}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-zinc-100">Training</h3>
                        <p className="text-zinc-300">{findings.training}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-zinc-100">Benchmarks</h3>
                        <ul className="list-disc pl-6 text-zinc-300">
                            {findings.benchmarks.map((benchmark) => (<li key={benchmark}>{benchmark}</li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}