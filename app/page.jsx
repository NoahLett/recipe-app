import prisma from '@/lib/prisma'

async function getRecipes() {
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
  console.log(recipes);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Let&apos;s Get Cooking!</h1>
    </main>
  )
}
