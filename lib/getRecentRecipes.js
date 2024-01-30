import prisma from "./prisma";

export default async function getRecentRecipes() {
    const recentRecipes = await prisma.recipe.findMany({
        where: { published: true },
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: {
            ingredients: {
                select: {name: true, measurement: true, quantity: true}
            }
        }
    });
    return recentRecipes;
}