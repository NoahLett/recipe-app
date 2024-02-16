import Link from "next/link";
import ShoppingListAddButton from "./ShoppingListAddButton";
import { BsThreeDots } from "react-icons/bs";

export default function Card({id, name, ingredients, image_src, author}) {
  return (
      <div className="w-[18rem] h-[19rem] rounded overflow-hidden shadow-lg m-2 bg-white relative">
        <div className="flex my-auto absolute right-[0] bg-white p-4 rounded-bl shadow-lg">
          <ShoppingListAddButton ingredients={ingredients} />
        </div>
        <Link href={`/recipes/${id}`}>
          <div className="flex items-center justify-center">
            <img className="h-52 w-full object-cover" src={image_src} alt="Recipe Card" />
          </div>
        </Link>
        <div className="px-6 pb-6 pt-4 bg-slate-100">
          <div className="flex">
            <Link className="mb-2" href={`/recipes/${id}`}><span className="font-bold text-lg">{name}</span></Link>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 text-base">{author}</span>
            <Link href={`/recipes/${id}`} className="ml-2"><BsThreeDots className="text-2xl hover:text-slate-600 transition-all duration-200"/></Link>
          </div>
        </div>
      </div>
  )
}
