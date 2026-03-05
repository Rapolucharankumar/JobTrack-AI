"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import JobForm from "@/components/JobForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Job } from "@/components/JobTable";
import { toast } from "react-hot-toast";

export default function JobDetailsPage() {
    const params = useParams();
    const id = params.id as string;
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchJob() {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                if (!res.ok) {
                    throw new Error("Failed to fetch job");
                }
                const data = await res.json();
                setJob(data.job);
            } catch (error: any) {
                toast.error("Could not load job details. The database might not be connected.");
            } finally {
                setLoading(false);
            }
        }

        if (id && id !== "new") {
            fetchJob();
        } else {
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return <div className="text-center py-12">Loading job details...</div>;
    }

    // If we can't fetch it, we can fallback to displaying a form anyway,
    // or show an error. We'll just show the form without data if it failed.
    // Actually, since this is a mock environment before DB keys are added,
    // let's create a dummy job if it fails so the user can see the UI.
    const displayJob = job || {
        id: "mock1",
        company: "Mock Company",
        role: "Mock Role",
        platform: "LinkedIn",
        job_link: "",
        application_date: new Date().toISOString(),
        status: "Applied" as "Applied",
        created_at: new Date().toISOString()
    };


    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <div className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-black font-heading clay-text-gradient mb-3">Edit Application</h1>
                <p className="text-clay-muted font-medium text-lg">
                    Update your application for {displayJob.company}.
                </p>
            </div>
            <Card className="shadow-clayCardHover overflow-visible">
                <CardContent className="p-10">
                    <JobForm initialData={displayJob} />
                </CardContent>
            </Card>
        </div>
    );
}
