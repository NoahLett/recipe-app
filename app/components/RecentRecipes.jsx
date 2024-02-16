import getRecentRecipes from "@/lib/getRecentRecipes";
import Carousel from "./Carousel";

const RecentRecipes = async () => {
    const recentRecipes = await getRecentRecipes();
  return (
    <div className="w-full">
        <h1 className='text-2xl text-center font-semibold py-3 bg-white'>Recent Additions</h1>
        <Carousel recipes={recentRecipes} />
    </div>
  )
}

export default RecentRecipes