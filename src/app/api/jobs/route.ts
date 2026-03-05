import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const platform = searchParams.get("platform");
    const limit = parseInt(searchParams.get("limit") || "50", 10);

    let query = supabase
        .from("applications")
        .select("*")
        .order("application_date", { ascending: false })
        .limit(limit);

    if (status) {
        query = query.eq("status", status);
    }
    if (platform) {
        query = query.eq("platform", platform);
    }

    const { data, error } = await query;

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ jobs: data });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { company, role, platform, job_link, application_date, status } = body;

        // Basic validation
        if (!company || !role || !platform || !application_date || !status) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const { data, error } = await supabase
            .from("applications")
            .insert([
                { company, role, platform, job_link, application_date, status }
            ])
            .select()
            .single();

        if (error) {
            // Postgres unique constraint violation error code is usually '23505'
            console.error("Supabase error code:", error.code);
            if (error.code === '23505') {
                return NextResponse.json({ error: "duplicate: Application already exists" }, { status: 409 });
            }
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ job: data }, { status: 201 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
