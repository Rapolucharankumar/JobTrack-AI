import Link from "next/link";
import { Briefcase } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 px-4 py-6">
            <div className="mx-auto max-w-7xl rounded-[40px] bg-white/80 backdrop-blur-xl shadow-clayCard border border-white/20 px-8 h-20 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] p-2.5 rounded-2xl shadow-clayButton transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <Briefcase className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-2xl font-black text-clay-foreground font-heading tracking-tight clay-text-gradient">JobTrack</span>
                    </Link>
                </div>

                <div className="flex items-center space-x-8">
                    <Link href="/dashboard" className="text-base font-bold text-clay-muted hover:text-clay-accent transition-colors hover:-translate-y-0.5 inline-block">
                        Dashboard
                    </Link>
                    <Link href="/add-job">
                        <Button size="default" variant="default" className="shadow-clayButton">
                            Add Job
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
