import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export type ApplicationStatus = "Applied" | "Interviewing" | "Offer" | "Rejected";

export interface Job {
    id: string;
    company: string;
    role: string;
    platform: string;
    job_link: string | null;
    application_date: string;
    status: ApplicationStatus;
    created_at: string;
}

interface JobTableProps {
    jobs: Job[];
}

export default function JobTable({ jobs }: JobTableProps) {
    if (!jobs || jobs.length === 0) {
        return (
            <div className="text-center py-20 bg-white/50 backdrop-blur-xl rounded-[32px] shadow-clayCard">
                <h3 className="text-2xl font-bold font-heading text-clay-foreground">No applications yet</h3>
                <p className="text-clay-muted font-medium mt-2">Start tracking your job hunt today.</p>
                <Link href="/add-job" className="clay-text-gradient font-bold mt-6 inline-block hover:scale-105 transition-transform">
                    Add your first job &rarr;
                </Link>
            </div>
        );
    }

    const getStatusBadge = (status: ApplicationStatus) => {
        switch (status) {
            case "Applied":
                return <Badge variant="info">Applied</Badge>;
            case "Interviewing":
                return <Badge variant="warning">Interviewing</Badge>;
            case "Offer":
                return <Badge variant="success">Offer</Badge>;
            case "Rejected":
                return <Badge variant="destructive">Rejected</Badge>;
            default:
                return <Badge variant="secondary">{status}</Badge>;
        }
    };

    return (
        <div className="space-y-4">
            {/* Table Header */}
            <div className="hidden lg:grid grid-cols-6 gap-4 px-8 py-4 text-xs font-bold text-clay-muted uppercase tracking-wider bg-white/30 rounded-2xl mx-2">
                <div>Company</div>
                <div>Role</div>
                <div>Platform</div>
                <div className="text-center">Date Applied</div>
                <div className="text-center">Status</div>
                <div className="text-right">Actions</div>
            </div>

            {/* Table Body */}
            <div className="space-y-4">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center bg-white/70 backdrop-blur-md px-8 py-6 rounded-[32px] shadow-clayCard hover:shadow-clayCardHover hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                    >
                        {/* Decorative side accent */}
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-clay-accent to-clay-accent-alt opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="flex items-center gap-3">
                            <div className="lg:hidden text-xs font-bold text-clay-muted uppercase w-20">Company:</div>
                            <span className="font-black text-clay-foreground text-xl font-heading">{job.company}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="lg:hidden text-xs font-bold text-clay-muted uppercase w-20">Role:</div>
                            <span className="font-bold text-clay-foreground">{job.role}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="lg:hidden text-xs font-bold text-clay-muted uppercase w-20">Platform:</div>
                            <span className="text-clay-muted font-bold bg-clay-canvas px-4 py-1 rounded-full text-xs uppercase tracking-tight">{job.platform}</span>
                        </div>

                        <div className="flex items-center justify-center gap-2">
                            <div className="lg:hidden text-xs font-bold text-clay-muted uppercase w-20 text-center">Date:</div>
                            <span className="text-clay-muted font-bold text-sm">
                                {new Date(job.application_date).toLocaleDateString()}
                            </span>
                        </div>

                        <div className="flex items-center justify-center gap-2">
                            <div className="lg:hidden text-xs font-bold text-clay-muted uppercase w-20 text-center">Status:</div>
                            {getStatusBadge(job.status)}
                        </div>

                        <div className="flex items-center justify-end gap-3">
                            {job.job_link && (
                                <a
                                    href={job.job_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-2xl bg-clay-canvas text-clay-muted hover:text-clay-accent hover:shadow-clayPressed transition-all"
                                    title="View Job Posting"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            )}
                            <Link
                                href={`/dashboard/${job.id}`}
                                className="px-6 py-3 rounded-2xl bg-clay-accent/10 text-clay-accent font-black text-sm hover:bg-clay-accent hover:text-white transition-all shadow-sm hover:shadow-clayButton"
                            >
                                Edit
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
