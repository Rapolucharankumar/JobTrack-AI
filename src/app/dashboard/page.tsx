import StatCard from "@/components/StatCard";
import JobTable, { Job } from "@/components/JobTable";
import { Briefcase, CheckCircle2, XCircle, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Temporary mock data until the API is connected
const MOCK_JOBS: Job[] = [
    {
        id: "1",
        company: "Google",
        role: "Frontend Engineer",
        platform: "LinkedIn",
        job_link: "https://linkedin.com",
        application_date: "2024-03-01",
        status: "Interviewing",
        created_at: new Date().toISOString()
    },
    {
        id: "2",
        company: "Meta",
        role: "React Developer",
        platform: "Wellfound",
        job_link: null,
        application_date: "2024-02-28",
        status: "Applied",
        created_at: new Date().toISOString()
    }
];

export default function DashboardPage() {
    // Mock stats
    const totalApplied = MOCK_JOBS.length;
    const interviewing = MOCK_JOBS.filter(j => j.status === "Interviewing").length;
    const offers = MOCK_JOBS.filter(j => j.status === "Offer").length;
    const rejected = MOCK_JOBS.filter(j => j.status === "Rejected").length;

    return (
        <div className="space-y-10 px-4 max-w-7xl mx-auto pb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight font-heading clay-text-gradient">Dashboard</h1>
                    <p className="text-clay-muted font-medium mt-2">Track your job hunt progress in digital clay.</p>
                </div>
                <Link href="/add-job" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto shadow-clayButtonHover h-14 px-8">
                        + New Application
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Applications"
                    value={totalApplied}
                    icon={<Briefcase className="w-6 h-6" />}
                />
                <div className="[&_div_div]:from-purple-400 [&_div_div]:to-purple-600">
                    <StatCard
                        title="Interviewing"
                        value={interviewing}
                        icon={<Clock className="w-6 h-6" />}
                    />
                </div>
                <div className="[&_div_div]:from-emerald-400 [&_div_div]:to-emerald-600">
                    <StatCard
                        title="Offers"
                        value={offers}
                        icon={<CheckCircle2 className="w-6 h-6" />}
                    />
                </div>
                <div className="[&_div_div]:from-pink-400 [&_div_div]:to-pink-600">
                    <StatCard
                        title="Rejected"
                        value={rejected}
                        icon={<XCircle className="w-6 h-6" />}
                    />
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight font-heading px-2">Recent Applications</h2>
                <JobTable jobs={MOCK_JOBS} />
            </div>
        </div>
    );
}
