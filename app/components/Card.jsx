import Link from "next/link";
import ShoppingListAddButton from "./ShoppingListAddButton";
import { BsThreeDots } from "react-icons/bs";

export default function Card({id, name, ingredients, image_src, author}) {
  return (
      <div className="max-w-xs min-w-xs rounded overflow-hidden shadow-lg m-2">
        <Link className="h-52" href={`/recipes/${id}`}><img className="object-cover" src={image_src} alt="Recipe Card" /></Link>
        <div className="px-6 py-4 bg-slate-100">
          <div className="flex justify-between">
            <Link className="mb-2" href={`/recipes/${id}`}><span className="font-bold text-xl">{name}</span></Link>
            <div className="flex my-auto">
              <ShoppingListAddButton ingredients={ingredients} />
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 text-base">{author}</span>
            <Link href={`/recipes/${id}`} className="ml-2"><BsThreeDots className="text-2xl hover:text-slate-600 transition-all duration-200"/></Link>
          </div>
        </div>
      </div>
  )
}
