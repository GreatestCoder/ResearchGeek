"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";


interface LoadingTimelineProps {
    loading: boolean;
    query: string;
}

const steps = [
    "Initializing Research",
    "AI Agents Researching",
    "Generating Report",
];

const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}


export default function LoadingTimeline({ loading, query }: LoadingTimelineProps) {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        if (!loading) {
            setCurrentStep(0);
            return;
        }

        setCurrentStep(0);
        const timer1 = setTimeout(() => setCurrentStep(1), 5000);
        const timer2 = setTimeout(() => setCurrentStep(2), 20000);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [loading]);

    if (!loading) {
        return null;
    }

    return (
        <motion.section className="mt-12 w-full max-w-4xl mx-auto px-4" {...fadeIn}>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
                <h2 className="text-2xl font-semibold text-zinc-100">Researching</h2>
                <p className="mt-2 text-zinc-400">"{query}"</p>

                <div className="mt-8 space-y-5">
                    {steps.map((step, index) => (
                        <div key={step} className="flex items-center gap-3">
                            {index < currentStep ? (
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                            ) : index === currentStep ? (
                                <Loader2 className="h-5 w-5 animate-spin text-blue-400" />
                            ) : (
                                <Circle className="h-5 w-5 text-zinc-500" />
                            )}
                            <span className="text-zinc-200">{step}</span>
                        </div>
                    ))}
                </div>

            </div>
        </motion.section>
    );
}