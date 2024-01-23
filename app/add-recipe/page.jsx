import RecipeForm from "../components/RecipeForm";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const AddRecipePage = async () => {

  const session = await getServerSession(options);

  if (!session) {
    redirect('api/auth/signin?callbackUrl=/add-recipe');
  }

  return (
    <div className="min-h-screen py-4 pt-20">
        <h1 className="text-3xl text-center font-semibold mb-3">Hey, {session?.user?.name}!</h1>
        <h3 className="text-2xl text-center font-medium">Let&apos;s Make a Recipe!</h3>
        <RecipeForm />
    </div>
  )
}

export default AddRecipePage;