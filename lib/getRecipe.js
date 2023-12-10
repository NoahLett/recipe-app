import prisma from "./prisma";

export default async function getRecipe(id) {
    const recipe = await prisma.recipe.findUnique({
      where: {id},
      include: {
        author: {
          select: {name: true}
        },
        ingredients: {
          select: {name: true, measurement: true, quantity: true}
        }
      }
    });
    return recipe;
  }