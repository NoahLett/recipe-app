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
        },
    });
    return searchResults;
};