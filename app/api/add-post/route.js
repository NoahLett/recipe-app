import { NextResponse } from "next/server";

export async function POST(req) {
    const res = await req.json();
    console.log({res});
    return NextResponse.json({ data: res });
}