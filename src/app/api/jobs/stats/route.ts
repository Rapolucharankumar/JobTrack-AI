import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        // In a real app we might use grouped aggregates, but for this MVP, 
        // it's simple enough to just fire a few quick count queries, 
        // or fetch everything in one query and reduce.

        // Fetch count grouped by status via edge function or raw fetch 
        // Supabase has exact head count fetching. Since MVP is small, fetching selected cols works.
        const { data, error } = await supabase
            .from('applications')
            .select('status');

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        const stats = {
            total: data.length,
            applied: 0,
            interviewing: 0,
            offer: 0,
            rejected: 0
        };

        data.forEach(app => {
            const status = app.status.toLowerCase();
            if (status === 'applied') stats.applied++;
            else if (status === 'interviewing') stats.interviewing++;
            else if (status === 'offer') stats.offer++;
            else if (status === 'rejected') stats.rejected++;
        });

        return NextResponse.json({ stats });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
