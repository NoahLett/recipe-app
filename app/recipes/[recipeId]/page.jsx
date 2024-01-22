import getRecipe from "@/lib/getRecipe";
import ShoppingListAddButton from "@/app/components/ShoppingListAddButton";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

  export default async function Page({ params }) {

    const recipe = await getRecipe(params.recipeId)
    console.log(recipe);

    return (
      <div className="min-h-screen pt-20 px-2">
        <div className="max-w-max mx-auto mt-8 p-6 bg-white rounded-md shadow-lg">
          <div className="flex justify-between">
          <Link href="/" className="inline-flex hover:text-slate-600 transition-all duration-300"><IoIosArrowBack className="text-2xl"/>Back</Link>
          <ShoppingListAddButton ingredients={recipe.ingredients} />
          </div>
        <h1 className="text-3xl font-bold my-4 text-slate-600">{recipe.name}</h1>
        <div className="mt-6 flex justify-center">
          <img
            src={recipe.image_src}
            alt="Dish"
            width={400}
            height={300}
            className="rounded-md"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
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
      </div>
    </div>
    )
  }