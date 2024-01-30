import Hero from './components/Hero';
import UserSubmissionList from './components/UserSubmissionList';
import RecentRecipes from './components/RecentRecipes';

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen pt-[3.5rem]">
      <Hero />
      <UserSubmissionList />
      <RecentRecipes />
    </main>
  )
}
