'use client'
import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import React, { useState, useEffect } from "react";

const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
        <header className="bg-white h-14 flex items-center">
        <div className="flex justify-between content-center w-[92%] mx-auto">
            <div>
                <Link className="cursor-pointer text-3xl font-bold" href="/">CooksCabinet</Link>
            </div>
            <div className={`nav-links duration-300 md:static absolute md:min-h-fit min-h-[100vh] top-14 ${
            click ? 'right-[0%] bg-slate-200' : 'right-[100%]'
          } md:w-auto w-full flex md:items-center px-5`}>
                <ul className="flex md:flex-row flex-col items-start md:items-center md:gap-[3vw] gap-6 mt-5 md:m-0">
                    <li>
                        <Link onClick={closeMobileMenu} className="hover:text-gray-500 text-xl" href="/add-recipe">Make a Recipe</Link>
                    </li>
                    <li>
                        <Link onClick={closeMobileMenu} className="hover:text-gray-500 text-xl" href="/">Admin</Link>
                    </li>
                    <li>
                        <Link onClick={closeMobileMenu} className="hover:text-gray-500 text-xl" href="/">FAQ</Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <Link href="/shoppingList"><FaShoppingCart className="text-3xl cursor-pointer" /></Link>
                {click ? <IoClose onClick={handleClick} className="text-3xl cursor-pointer md:hidden"/> : <IoMenu onClick={handleClick} className="text-3xl cursor-pointer md:hidden"/>}
            </div>
            </div>
    </header>
  )
}

export default Navbar