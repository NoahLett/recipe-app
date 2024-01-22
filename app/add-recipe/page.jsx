import RecipeForm from "../components/RecipeForm"

const AddRecipePage = () => {
  return (
    <div className="min-h-screen py-4 pt-20">
        <h1 className="text-3xl text-center font-semibold">Create a Recipe</h1>
        <RecipeForm />
    </div>
  )
}

export default AddRecipePage