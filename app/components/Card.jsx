import Link from "next/link";
import ShoppingListAddButton from "./ShoppingListAddButton";
import { BsThreeDots } from "react-icons/bs";

export default function Card({id, name, ingredients, image_src, author}) {
  return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-2">
        <Link href={`/recipes/${id}`}><img className="w-full" src={image_src} alt="Card" /></Link>
        <div className="px-6 py-4 bg-slate-100">
          <div className="flex justify-between">
            <span className="font-bold text-xl mb-2">{name}</span>
            <div className="flex my-auto">
              <ShoppingListAddButton ingredients={ingredients} />
              <Link href={`/recipes/${id}`} className="ml-2"><BsThreeDots className="text-2xl"/></Link>
            </div>
          </div>
          <span className="text-gray-700 text-base">{author}</span>
        </div>
      </div>
  )
}
