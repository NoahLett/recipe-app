import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className='bg-white'>
        <nav className="flex justify-between items-center w-[92%] mx-auto py-2">
            <div>
                <Link className="text-slate-900 no-underline font-bold text-3xl" href='/'>Shopper</Link>
            </div>
            <div className="md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                    <li>
                        <Link className="hover:text-gray-500" href="">Make a Recipe</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-500" href="">Another Link</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-500" href="">FAQ</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link className="bg-[#a6c1ee] text-white px-5 py-2 hover:bg-[#87acec] rounded-xl" href="/">Sign In</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar