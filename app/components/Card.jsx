import Link from "next/link";

export default function Card({id, name, image_src, author}) {
  return (
    <Link href={`/recipes/${id}`}>
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image_src} alt="Card" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{author}</p>
        </div>
      </div>
    </Link>
  )
}
