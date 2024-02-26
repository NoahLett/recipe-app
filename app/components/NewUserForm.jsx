'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

const NewUserForm = () => {

    const router = useRouter();
    const [formData, setFormData] = useState({
      name: '',
      username: '',
      password: '',
      confirm_password: '',
    });
    const [errMsg, setErrMsg] = useState('');

    const handleChange = e => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = async e => {
      e.preventDefault();
      setErrMsg('');
      const res = await fetch('/api/new-user', {
        method: 'POST',
        body: JSON.stringify({ formData }),
        'Content-Type': 'application/json',
      });

      if (!res.ok) {
        const response = await res.json();
        setErrMsg(response.message);
      } else {
        router.refresh();
        router.push('/sign-in');
      }
    }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-5 mb-2 text-center text-4xl font-bold">
            Register to Explore More!
        </h2>
        </div>

        <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm px-5 py-7 rounded-md shadow-md bg-slate-50">
          <form className="space-y-6" onSubmit={handleSubmit} method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

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
                  autoComplete="current-password"
                  required
                  onChange={handleChange}
                  placeholder="unique-username"
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
                  onChange={handleChange}
                  required
                  placeholder="secure-password"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  autoComplete="off"
                  onChange={handleChange}
                  required
                  placeholder="secure-password (again)"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
            <div>
              <p className="text-sm text-center text-slate-600">
                Already have an account? Sign in <Link className="text-indigo-600" href={'/sign-in'}>here</Link>!
              </p>
            </div>
          </form>
        </div>
      </div>
  )
}

export default NewUserForm