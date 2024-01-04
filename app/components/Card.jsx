import Link from "next/link";
import ShoppingListAddButton from "./ShoppingListAddButton";

export default function Card({id, name, ingredients, image_src, author}) {
  return (
    <Link href={`/recipes/${id}`}>
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image_src} alt="Card" />
        <div className="px-6 py-4 bg-slate-100">
          <div className="font-bold text-xl mb-2">{name}</div>
          <div className="flex justify-between">
          <span className="text-gray-700 text-base">{author}</span>
          <ShoppingListAddButton ingredients={ingredients} />
          </div>
        </div>
      </div>
    </Link>
  )
}
