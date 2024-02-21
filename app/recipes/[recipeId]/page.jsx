import getRecipe from "@/lib/getRecipe";
import ShoppingListAddButton from "@/app/components/ShoppingListAddButton";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import BackButton from "@/app/components/BackButton";

  export default async function Page({ params }) {

    const recipe = await getRecipe(params.recipeId);

    return (
      <div className="min-h-screen pt-10 pb-4 px-2">
        <div className="max-w-[50rem] mx-auto mt-8 p-6 bg-white rounded-md shadow-lg">
          <div className="flex justify-between">
          <BackButton />
          <ShoppingListAddButton ingredients={recipe.ingredients} />
          </div>
        <h1 className="text-3xl font-bold my-4 text-slate-600">{recipe.name}</h1>
        <span className="text-xl font-medium text-slate-600 ml-4">Serving Size: {recipe.servingSize}</span>
        <div className="mt-6 flex items-center justify-center">
          <img
            src={recipe.image_src}
            alt="Dish"
            width={400}
            height={300}
            className="w-full object-cover h-52 rounded-md"
          />
        </div>
        <div className="mt-4 md:grid grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mt-7 mb-2 text-slate-600">Ingredients</h2>
            <ul className="list-disc ml-6">
              {recipe.ingredients.map((ingredient, index) => (
                <li className="text-slate-600 mb-2" key={index}>
                  {ingredient.quantity}{' '}
                  {ingredient.measurement !== 'null' && ingredient.measurement}{' '}
                  {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mt-7 mb-2 text-slate-600">Steps</h2>
            <ol className="list-decimal ml-6">
              {recipe.steps.map((step, index) => (
                <li className="text-slate-600 mb-2" key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
    )
  }