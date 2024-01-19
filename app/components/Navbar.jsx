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
        <header className="bg-white h-14 flex items-center fixed w-full top-0 z-50">
        <div className="flex justify-between content-center w-[92%] mx-auto">
            <div>
                <Link className="cursor-pointer text-3xl font-bold" href="/">CooksCabinet</Link>
            </div>
            <div className="flex">
            <div className={`nav-links duration-300 lg:static absolute lg:min-h-fit min-h-[100vh] top-14 ${
            click ? 'right-[0%] max-lg:bg-slate-200' : 'right-[100%]'
          } lg:w-auto w-full flex lg:items-center px-5`}>
                <ul className="flex lg:flex-row flex-col items-start lg:items-center lg:gap-[2vw] gap-6 mt-5 lg:m-0">
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
            <div className="flex items-center ml-5 gap-5">
                <Link href="/shoppingList"><FaShoppingCart className="text-3xl cursor-pointer" /></Link>
                {click ? <IoClose onClick={handleClick} className="text-3xl cursor-pointer lg:hidden"/> : <IoMenu onClick={handleClick} className="text-3xl cursor-pointer lg:hidden"/>}
            </div>
            </div>
            </div>
    </header>
  )
}

export default Navbar