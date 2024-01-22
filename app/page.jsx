import Card from './components/Card';
import getRecipes from '@/lib/getRecipes';

export default async function Home() {
  const recipes = await getRecipes();
  return (
    <main className="flex flex-wrap items-center justify-center min-h-screen pt-20">
      {
        recipes.map((recipe) => {
          return (
            <Card
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              image_src={recipe.image_src}
              author={recipe.author.name}
              ingredients={recipe.ingredients} 
            />
          )
        })
      }
    </main>
  )
}
