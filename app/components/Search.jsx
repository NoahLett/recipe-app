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
      <div className="flex items-center">
          <input
              className="bg-slate-100 px-5 py-1 sm:px-5 sm:py-3 rounded-3xl text-slate-800 border-[1px] border-slate-300 min-w-[17rem]"
              placeholder="What sounds good?"
              value={searchQuery}
              onChange={event => setSearchQuery(event.target.value)}
          />
          <FaSearch className="text-2xl ml-2" />
      </div>
    </form>
  )
}

export default Search