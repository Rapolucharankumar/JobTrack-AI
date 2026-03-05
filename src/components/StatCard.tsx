import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface StatCardProps {
    title: string;
    value: number | string;
    icon: ReactNode;
    description?: string;
    trend?: string;
}

export default function StatCard({ title, value, icon, description, trend }: StatCardProps) {
    return (
        <Card className="hover:scale-105 transition-transform duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 p-6">
                <CardTitle className="text-sm font-bold text-clay-muted uppercase tracking-wider font-heading">
                    {title}
                </CardTitle>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center shadow-clayButton animate-clay-breathe">
                    {icon}
                </div>
            </CardHeader>
            <CardContent className="px-6 pb-6">
                <div className="text-3xl font-black text-clay-foreground font-heading">{value}</div>
                {(description || trend) && (
                    <p className="text-sm text-clay-muted mt-1 font-medium">
                        {trend && <span className="text-clay-success font-bold mr-1">{trend}</span>}
                        {description}
                    </p>
                )}
            </CardContent>
        </Card>
    );
}
