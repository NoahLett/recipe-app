'use client';

import { signIn } from "next-auth/react";
import Image from "next/image";

function GithubSignInButton() {
    
    const handleClick = () => {
      signIn("github");
    };
  
    return (
      <button
        onClick={handleClick}
        className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-lg transition-colors duration-300 bg-black text-white rounded-lg focus:shadow-outline hover:bg-slate-800"
      >
        <Image src={'/github-mark-white.png'} alt="Github Logo" width={25} height={25} />
        <span className="ml-4">Continue with Github</span>
      </button>
    );
  }

export default GithubSignInButton