import prisma from "./prisma";

export default async function getRecipes() {
    const recipes = await prisma.recipe.findMany({
      where: {published: true},
      include: {
        ingredients: {
          select: {name: true, measurement: true, quantity: true}
        }
      }
    });
    return recipes;
  }