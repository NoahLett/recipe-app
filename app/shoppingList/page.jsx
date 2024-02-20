
import dynamic from "next/dynamic"
import BackButton from "../components/BackButton";
// import IngredientList from "../components/ShoppingList"

const IngredientList = dynamic(() => import('../components/ShoppingList'), {
  ssr: false,
});

const ShoppingListPage = () => {
  return (
    <main className="min-h-screen max-w-[1024px] pt-20 px-2 mx-auto">
      <BackButton />
      <h1 className="text-3xl text-center font-semibold">Shopping List</h1>
      <IngredientList />
    </main>
  )
}

export default ShoppingListPage