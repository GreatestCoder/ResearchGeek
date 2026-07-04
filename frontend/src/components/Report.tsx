import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Copy, Download } from "lucide-react";
import { motion } from "framer-motion";


interface ReportProps {
    title: string;
    report: string;
}

const fadeIn = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
};


export default function Report({ title, report }: ReportProps) {
    const copyReport = async () => {
        try {
            await navigator.clipboard.writeText(report);
            toast.success("Report copied!");
        } catch {
            toast.error("Failed to copy report.");
        }
    };

    const downloadReport = () => {
        const blob = new Blob([report], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        const filename = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");
        link.download = `${filename}.md`;
        link.click();
        URL.revokeObjectURL(url);
        toast.success("Report downloaded!");
    };

    return (
        <motion.section className="mt-12 mx-auto w-full max-w-4xl px-4" {...fadeIn}>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
                <div className="mb-8 flex items-center justify-between border-b border-zinc-800 pb-4">
                    <h2 className="text-2xl font-semibold text-zinc-100"> 📄 Research Report </h2>

                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-zinc-700 bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:text-white" onClick={copyReport}><Copy className="mr-2 h-4 w-4" />Copy</Button>
                        <Button variant="outline" size="sm" className="border-zinc-700 bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:text-white" onClick={downloadReport}><Download className="mr-2 h-4 w-4" />Download</Button>
                    </div>
                </div>

                <div className="prose prose-invert max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{report}</ReactMarkdown>
                </div>

            </div>
        </motion.section>
    );
}