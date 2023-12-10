import getRecipe from "@/lib/getRecipe";

  export default async function Page({ params }) {

    const recipe = await getRecipe(params.recipeId)
    console.log(recipe);

    return (
        <div>{recipe.name}</div>
    )
  }