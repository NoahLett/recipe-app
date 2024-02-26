'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {

    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const onSearch = (event) => {
        event.preventDefault();
        const encodedSearchQuery = encodeURIComponent(searchQuery);
        router.push(`/search?q=${encodedSearchQuery}`);
    }

  return (
    <form onSubmit={onSearch}>
      <div className="flex items-center relative">
          <input
              className="bg-slate-100 px-5 py-1 sm:px-5 sm:py-3 rounded-3xl text-slate-800  md:min-w-[22rem] min-w-[17rem] outline-[#CD5C5C]"
              placeholder="What sounds good?"
              value={searchQuery}
              onChange={event => setSearchQuery(event.target.value)}
          />
          <FaSearch onClick={onSearch} className="right-[1rem] absolute text-xl text-red-300 ml-2" />
      </div>
    </form>
  )
}

export default Search