import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req, {params}) {
    const id = params.id;

    const result = await prisma.submission.update({
        where: {id},
        data: {
            authorVisible: false,
        },
    });

    return NextResponse.json({ result });
};