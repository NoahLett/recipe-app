
import dynamic from "next/dynamic"
// import IngredientList from "../components/ShoppingList"

const IngredientList = dynamic(() => import('../components/ShoppingList'), {
  ssr: false,
});

const ShoppingListPage = () => {
  return (
    <main className="px-4 mt-10 min-h-screen">
      <h1 className="text-3xl text-center font-medium">Shopping List</h1>
      <IngredientList />
    </main>
  )
}

export default ShoppingListPage