import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
    const res = await req.json();
    const id = params.id;
    const { includeTrue } = res;

    const result = await prisma.submission.update({
        where: { id },
        data: {
            authorVisible: includeTrue,
        },
    });

    return NextResponse.json({ result });
};