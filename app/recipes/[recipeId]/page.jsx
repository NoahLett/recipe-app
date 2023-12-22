import getRecipe from "@/lib/getRecipe";
import ShoppingListAddButton from "@/app/components/ShoppingListAddButton";
import Link from "next/link";

  export default async function Page({ params }) {

    const recipe = await getRecipe(params.recipeId)
    console.log(recipe);

    return (
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-md shadow-lg">
        <Link href="/shoppingList">Shopping List</Link>
      <h1 className="text-3xl font-bold mb-4 text-slate-600">{recipe.name}</h1>
      <ShoppingListAddButton ingredients={recipe.ingredients} />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-slate-600">Ingredients</h2>
          <ul className="list-disc ml-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li className="text-slate-600" key={index}>
                {ingredient.quantity}{' '}
                {ingredient.measurement !== 'null' && ingredient.measurement}{' '}
                {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-slate-600">Steps</h2>
          <ol className="list-decimal ml-6">
            {recipe.steps.map((step, index) => (
              <li className="text-slate-600" key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className="mt-6">
        <img
          src={recipe.image_src}
          alt="Dish"
          width={400}
          height={300}
          className="rounded-md"
        />
      </div>
    </div>
    )
  }