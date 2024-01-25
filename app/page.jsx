import Card from './components/Card';
import getRecipes from '@/lib/getRecipes';
import Hero from './components/Hero';

export default async function Home() {
  const recipes = await getRecipes();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen pt-[3.5rem]">
      <Hero />
      <div className='flex flex-wrap items-center justify-center'>
      {
        recipes.map((recipe) => {
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
    </main>
  )
}
