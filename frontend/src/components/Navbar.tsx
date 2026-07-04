import Link from "next/link";
import { GithubIcon } from "@/components/ui/github";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b-black bg-gradient-to-br from-zinc-950 via-zinc-900 to-slate-900 text-zinc-100">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link href="/" className="text-xl font-bold tracking-tight">ResearchGeek</Link>
                <Link href="https://github.com/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                    <GithubIcon className="h-5 w-5" />
                    GitHub
                </Link>
            </div>
        </header>
    );
}