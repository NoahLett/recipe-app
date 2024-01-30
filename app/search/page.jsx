import getSearchResults from "@/lib/getSearchResults";
import Card from "../components/Card";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

const SearchPage = async ({ searchParams }) => {

  const results = await getSearchResults(searchParams?.q);

  return (
    <div className="min-h-screen pt-16">
      <Link href="/" className="text-xl m-5 inline-flex items-center hover:text-slate-600 transition-all duration-300"><IoIosArrowBack className="text-2xl"/>Back</Link>
      <h1 className="text-3xl font-semibold text-center my-5">Search Results</h1>
      <div className="flex flex-wrap items-center justify-center">
      {
        results && results.length ? (
          results.map((result) => {
            return (
              <Card 
                key={result.id}
                id={result.id}
                name={result.name}
                image_src={result.image_src}
                author={result.author}
                ingredients={result.ingredients}
              />
            )
          })
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-medium">No results matched...</h2>
            <Image src={'/search.svg'} height={400} width={400} alt='no results' />
          </div>
        )
      }
      </div>
    </div>
  )

}

export default SearchPage