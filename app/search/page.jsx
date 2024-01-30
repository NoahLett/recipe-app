import getSearchResults from "@/lib/getSearchResults";
import Card from "../components/Card";

const SearchPage = async ({ searchParams }) => {

  const results = await getSearchResults(searchParams?.q);
  console.log(results);

  return (
    <div className="min-h-screen pt-20">
      <h1 className="text-3xl font-semibold text-center my-5">Search Results</h1>
      <div className="flex flex-wrap items-center justify-center">
      {
        results && results.length && (
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
        )
      }
      </div>
    </div>
  )

}

export default SearchPage