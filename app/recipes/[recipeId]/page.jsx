export async function getRecipe(id) {
    const recipe = await prisma.recipe.findUnique({
      where: {id},
      include: {
        author: {
          select: {name: true}
        }
      }
    });
    return recipe;
  }

  export default async function Page({ params }) {

    const recipe = await getRecipe(params.recipeId)

    return (
        <div>{recipe.name}</div>
    )
  }