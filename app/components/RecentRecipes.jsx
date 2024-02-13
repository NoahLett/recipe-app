import getRecentRecipes from "@/lib/getRecentRecipes";
import Carousel from "./Carousel";

const RecentRecipes = async () => {
    const recentRecipes = await getRecentRecipes();
  return (
    <div>
        <h1 className='text-3xl text-center font-semibold mt-6 mb-4'>Recent Additions</h1>
        <Carousel recipes={recentRecipes} />
    </div>
  )
}

export default RecentRecipes