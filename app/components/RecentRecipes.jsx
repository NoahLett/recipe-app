import getRecentRecipes from "@/lib/getRecentRecipes";
import Card from "./Card";

const RecentRecipes = async () => {
    const recentRecipes = await getRecentRecipes();
  return (
    <div>
        <h1 className='text-3xl text-center font-semibold my-2'>Recent Additions</h1>
        <div className='flex flex-wrap items-center justify-center'>
        {
            recentRecipes.map((recipe) => {
                return (
                    <Card
                        key={recipe.id}
                        id={recipe.id}
                        name={recipe.name}
                        image_src={recipe.image_src}
                        author={recipe.author}
                        ingredients={recipe.ingredients} 
                    />
                )
            })
        }
        </div>
    </div>
  )
}

export default RecentRecipes