'use client'

import dynamic from "next/dynamic"
// import IngredientList from "../components/ShoppingList"

const IngredientList = dynamic(() => import('../components/ShoppingList'), {
  ssr: false,
});

const ShoppingListPage = () => {
  return (
    <main className="min-h-screen">
      <h1 className="text-3xl">Shopping List</h1>
      <IngredientList />
    </main>
  )
}

export default ShoppingListPage