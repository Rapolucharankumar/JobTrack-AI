"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Job } from "@/components/JobTable";

interface JobFormProps {
    initialData?: Job;
}

export default function JobForm({ initialData }: JobFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const isEditing = !!initialData;

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            company: formData.get("company"),
            role: formData.get("role"),
            platform: formData.get("platform"),
            job_link: formData.get("job_link"),
            application_date: formData.get("application_date"),
            status: formData.get("status"),
        };

        try {
            const endpoint = isEditing ? `/api/jobs/${initialData.id}` : "/api/jobs";
            const method = isEditing ? "PUT" : "POST";

            const res = await fetch(endpoint, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const json = await res.json();

            if (!res.ok) {
                if (json.error?.includes("duplicate")) {
                    toast.error("You have already applied for this role at this company!");
                } else {
                    toast.error(json.error || "Failed to save job.");
                }
                return;
            }

            toast.success(isEditing ? "Application updated!" : "Application added!");
            router.push("/dashboard");
            router.refresh();
        } catch (error) {
            toast.error("An error occurred while saving the job.");
        } finally {
            setLoading(false);
        }
    }

    // Pre-fill the date correctly
    const defaultDate = initialData?.application_date
        ? new Date(initialData.application_date).toISOString().split('T')[0]
        : new Date().toISOString().split('T')[0];

    return (
        <form onSubmit={onSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                    <label htmlFor="company" className="text-sm font-bold text-clay-muted ml-2">Company Name *</label>
                    <Input id="company" name="company" required placeholder="e.g. Google" defaultValue={initialData?.company} disabled={isEditing} />
                </div>

                <div className="space-y-3">
                    <label htmlFor="role" className="text-sm font-bold text-clay-muted ml-2">Role / Title *</label>
                    <Input id="role" name="role" required placeholder="e.g. Frontend Engineer" defaultValue={initialData?.role} disabled={isEditing} />
                </div>

                <div className="space-y-3">
                    <label htmlFor="platform" className="text-sm font-bold text-clay-muted ml-2">Platform *</label>
                    <Input id="platform" name="platform" required placeholder="e.g. LinkedIn, Wellfound" defaultValue={initialData?.platform} disabled={isEditing} />
                </div>

                <div className="space-y-3">
                    <label htmlFor="job_link" className="text-sm font-bold text-clay-muted ml-2">Job Link</label>
                    <Input id="job_link" name="job_link" type="url" placeholder="https://..." defaultValue={initialData?.job_link || ""} />
                </div>

                <div className="space-y-3">
                    <label htmlFor="application_date" className="text-sm font-bold text-clay-muted ml-2">Date Applied *</label>
                    <Input
                        id="application_date"
                        name="application_date"
                        type="date"
                        required
                        defaultValue={defaultDate}
                    />
                </div>

                <div className="space-y-3">
                    <label htmlFor="status" className="text-sm font-bold text-clay-muted ml-2">Status *</label>
                    <select
                        id="status"
                        name="status"
                        required
                        defaultValue={initialData?.status || "Applied"}
                        className="flex h-16 w-full rounded-2xl border-0 bg-[#EFEBF5] px-6 py-4 text-lg font-medium text-clay-foreground shadow-clayPressed focus:outline-none focus:bg-white focus:ring-4 focus:ring-clay-accent/20 transition-all duration-200 appearance-none cursor-pointer"
                    >
                        <option value="Applied">Applied</option>
                        <option value="Interviewing">Interviewing</option>
                        <option value="Offer">Offer</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
                <Button type="button" variant="outline" className="h-14 px-8 bg-white/50" onClick={() => router.back()}>
                    Cancel
                </Button>
                <Button type="submit" disabled={loading} className="h-14 px-10 shadow-clayButtonHover">
                    {loading ? "Saving..." : (isEditing ? "Update Application" : "Save Application")}
                </Button>
            </div>
        </form>
    );
}
