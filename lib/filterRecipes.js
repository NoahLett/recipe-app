import prisma from "./prisma";

export default async function filterRecipes(searchString) {
  if (searchString === 'all') {
    const allRecipes = await prisma.recipe.findMany({
      where: { published: true },
      include: {
        ingredients: {
          select: { name: true, measurement: true, quantity: true },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });

    return allRecipes;
  }

  const recipes = await prisma.recipe.findMany({
    where: {
      published: true,
      OR: [
        {
          name: {
            contains: searchString,
            mode: 'insensitive',
          },
        },
        {
          author: {
            contains: searchString,
            mode: 'insensitive',
          },
        },
        {
          genre: {
            contains: searchString,
            mode: 'insensitive',
          },
        },
      ],
    },
    include: {
      ingredients: {
        select: { name: true, measurement: true, quantity: true },
      },
    },
    orderBy: {
      name: 'asc',
    },
  });

  return recipes;
}
