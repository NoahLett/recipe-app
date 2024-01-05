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
    <div>
        <nav className="bg-slate-100 fixed w-screen">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-slate-900 text-3xl font-bold" onClick={closeMobileMenu}>
                        CooksCabinet
                    </Link>
                    <ul className={`md:flex flex-grow items-center justify-end ${click ? 'absolute' : 'hidden'}`}>
                        <li>
                            <Link href='/' className='text-slate-900 px-3 py-2 rounded-md text-sm font-medium' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/' className='text-slate-900 px-3 py-2 rounded-md text-sm font-medium' onClick={closeMobileMenu}>
                                Admin
                            </Link>
                        </li>
                        <li>
                            <Link href='/' className='text-slate-900 px-3 py-2 rounded-md text-sm font-medium' onClick={closeMobileMenu}>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                    <div className="flex flex-row">
                        <Link href="/shoppingList"><FaShoppingCart className="text-slate-900 cursor-pointer text-3xl mx-4" /></Link>
                        <div className="flex md:hidden">
                            {click ? (
                                <IoClose className="text-slate-900 cursor-pointer text-3xl" onClick={handleClick} />
                            ) : (
                                <IoMenu className="text-slate-900 cursor-pointer text-3xl" onClick={handleClick} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar