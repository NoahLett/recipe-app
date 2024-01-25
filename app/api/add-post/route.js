import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const res = await req.json();
    const { authorName, id, recipeName, ingredients, steps } = res;
    console.log({res});

    const result = await prisma.submission.create({
        data: {
            name: recipeName,
            ingredients,
            steps,
            author: authorName,
            authorId: id,
        }
    })

    return NextResponse.json({ result });
}