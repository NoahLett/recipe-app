import RecipeForm from "../components/RecipeForm";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

const AddRecipePage = async () => {

  const session = await getServerSession();

  if (!session || !session.user) {
    redirect('api/auth/signin');
  }

  return (
    <div className="min-h-screen py-4 pt-20">
        <h1 className="text-3xl text-center font-semibold">Create a Recipe</h1>
        <RecipeForm />
    </div>
  )
}

export default AddRecipePage