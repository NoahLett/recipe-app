'use client'
import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Image from "next/image";



const ACTIVE = "border-b-2 border-sky-300 transition-all duration-150";
const INACTIVE = "";


function AuthButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div onClick={signOut} className="flex items-center">
                <Image className="cursor-pointer mx-2 object-fit rounded-full border-[1px] border-sky-400" priority={true} width={40} height={40} src={session?.user?.image} alt="profile picture" />
                <span className="mx-1 hover:text-gray-500 cursor-pointer transition-all duration-150 text-xl">{session?.user?.name}</span>
            </div>
        );
    }
    return (
        <div onClick={signIn} className="flex items-center">
            <Image className="cursor-pointer mx-2 object-fit rounded-full border-[1px] border-sky-400" priority={true} width={40} height={40} src={'/chef-hat-2.png'} alt="profile picture" />
            <span className="mx-1 hover:text-gray-500 cursor-pointer transition-all duration-150 text-xl">Sign In</span>
        </div>
    )
}

const Navbar = () => {

  const pathname = usePathname();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
        <header className="bg-white h-14 flex items-center fixed w-full top-0 z-50 border-b-2 border-slate-200 shadow-sm">
        <div className="flex justify-between content-center items-center w-[92%] mx-auto">
            <div>
                <Link onClick={closeMobileMenu} className="cursor-pointer text-3xl font-bold" href="/">CooksCabinet</Link>
            </div>
            <div className="flex">
            <div className={`nav-links duration-300 lg:static absolute lg:min-h-fit min-h-[100vh] top-14 ${click ? 'right-[0%] max-lg:bg-slate-200' : 'right-[100%]'} justify-center lg:w-auto w-full flex lg:items-center px-5`}
                 onClick={closeMobileMenu}
            >
                <ul className="flex lg:flex-row flex-col justify-center items-center lg:gap-[2vw] gap-6 mt-5 lg:m-0">
                    <li>
                        <Link onClick={closeMobileMenu} className={`hover:text-gray-500 text-2xl lg:text-xl ${pathname === "/view-all" ? ACTIVE : INACTIVE}`} href="/view-all">All Recipes</Link>
                    </li>
                    <li>
                        <Link onClick={closeMobileMenu} className={`hover:text-gray-500 text-2xl lg:text-xl ${pathname === "/add-recipe" ? ACTIVE : INACTIVE}`} href="/add-recipe">Make a Recipe</Link>
                    </li>
                    <li>
                        <Link onClick={closeMobileMenu} className={`hover:text-gray-500 text-2xl lg:text-xl ${pathname === "/admin" ? ACTIVE : INACTIVE}`} href="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link onClick={closeMobileMenu} className={`hover:text-gray-500 text-2xl lg:text-xl ${pathname === "/faq" ? ACTIVE : INACTIVE}`} href="/faq">FAQ</Link>
                    </li>
                    <li>
                        <AuthButton />
                    </li>
                </ul>
            </div>
            <div className="flex items-center ml-5 gap-5">
                <Link onClick={closeMobileMenu} href="/shoppingList"><FaShoppingCart className="text-3xl cursor-pointer" /></Link>
                {click ? <IoClose onClick={handleClick} className="text-3xl cursor-pointer lg:hidden"/> : <IoMenu onClick={handleClick} className="text-3xl cursor-pointer lg:hidden"/>}
            </div>
            </div>
            </div>
    </header>
  )
}

export default Navbar