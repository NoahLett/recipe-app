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
    <div className="min-h-screen pt-[7rem]">
        <RecipeForm />
    </div>
  )
}

export default AddRecipePage;