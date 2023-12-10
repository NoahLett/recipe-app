import prisma from "./prisma";

export default async function getRecipes() {
    const recipes = await prisma.recipe.findMany({
      where: {published: true},
      include: {
        author: {
          select: {name: true}
        }
      }
    });
    return recipes;
  }