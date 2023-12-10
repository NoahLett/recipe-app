import prisma from '@/lib/prisma'
import Card from './components/Card';

export async function getRecipes() {
  const recipes = await prisma.recipe.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  });
  return recipes;
}

export default async function Home() {
  const recipes = await getRecipes();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Let&apos;s Get Cooking!</h1>
      {
        recipes.map((recipe) => {
          return (
            <Card
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              image_src={recipe.image_src}
              author={recipe.author.name} 
            />
          )
        })
      }
    </main>
  )
}