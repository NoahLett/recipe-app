'use client'

import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SignInCredentialsForm = () => {

  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);


    const signInResponse = await signIn("credentials", {
      username: data.get('username'),
      password: data.get('password'),
      redirect: false,
    });

    if (signInResponse && !signInResponse.error) {
      router.push('/');
    } else {
      console.log('Error: ', signInResponse);
      setError('Invalid Credentials');
    }

  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} >
      
      {error && (
        <p className="p-2 my-2 text-center rounded-md text-md font-semibold text-white bg-red-500">
          {error}
        </p>
      )}

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
            Username
          </label>
        </div>
        <div className="mt-2">
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="off"
            placeholder="your-username"
            required
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            placeholder="your-password"
            required
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign In
        </button>
      </div>
      <div>
        <p className="text-sm text-center text-slate-600">
          Don&apos;t have an account? Sign up <Link className="text-indigo-600" href={'/sign-up'}>here</Link>!
        </p>
      </div>
    </form>
  )
}

export default SignInCredentialsForm