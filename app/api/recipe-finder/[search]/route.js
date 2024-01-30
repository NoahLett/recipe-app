import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import filterRecipes from "@/lib/filterRecipes";

export async function GET(req, { params }) {
    const search = params.search;
    const recipes = await filterRecipes(search);

    return NextResponse.json({ recipes });
}