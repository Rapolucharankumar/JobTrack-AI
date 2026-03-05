import JobForm from "@/components/JobForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AddJobPage() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <div className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-black font-heading clay-text-gradient mb-3">Add New Application</h1>
                <p className="text-clay-muted font-medium text-lg">
                    Record a new job you've applied to. We'll automatically check for duplicates.
                </p>
            </div>
            <Card className="shadow-clayCardHover overflow-visible">
                <CardContent className="p-10">
                    <JobForm />
                </CardContent>
            </Card>
        </div>
    );
}
