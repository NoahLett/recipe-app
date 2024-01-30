import { Turret_Road } from "next/font/google";
import prisma from "./prisma";

export default async function getSearchResults(q) {
    const searchResults = await prisma.recipe.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: q,
                        mode: 'insensitive',
                    },
                },
                {
                    author: {
                        contains: q,
                        mode: 'insensitive',
                    },
                },
                {
                    genre: {
                        contains: q,
                        mode: 'insensitive',
                    },
                },
            ],
            published: true,
        },
        include: {
            ingredients: {
                select: {name: true, measurement: true, quantity: true}
            }
        }
    });
    return searchResults;
};