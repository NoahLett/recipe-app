import prisma from "./prisma";

export default async function getSearchResults(q) {
    const searchResults = await prisma.recipe.findMany({
        where: {
            name: {
                contains: q,
                mode: 'insensitive',
            }
        }
    });
    return searchResults;
};