import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = 'force-dynamic';

export async function PUT(request: Request, context: any) {
    try {
        const { id } = context.params;
        const body = await request.json();

        // Only allow updating specific fields to prevent malicious overwrites
        const { status, job_link, application_date } = body;

        const updates: any = {};
        if (status) updates.status = status;
        if (job_link !== undefined) updates.job_link = job_link;
        if (application_date) updates.application_date = application_date;

        const { data, error } = await supabase
            .from("applications")
            .update(updates)
            .eq("id", id)
            .select()
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ job: data });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function GET(request: Request, context: any) {
    try {
        const { id } = context.params;

        const { data, error } = await supabase
            .from("applications")
            .select("*")
            .eq("id", id)
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 404 });
        }

        return NextResponse.json({ job: data });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
