
import dynamic from "next/dynamic"
// import IngredientList from "../components/ShoppingList"

const IngredientList = dynamic(() => import('../components/ShoppingList'), {
  ssr: false,
});

const ShoppingListPage = () => {
  return (
    <main className="px-4 pt-20 min-h-screen max-w-2xl mx-auto">
      <h1 className="text-3xl text-center font-semibold">Shopping List</h1>
      <IngredientList />
    </main>
  )
}

export default ShoppingListPage