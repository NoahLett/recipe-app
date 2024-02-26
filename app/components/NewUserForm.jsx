'use client'

import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaCheck, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const NewUserForm = () => {

    const usernameRef = useRef();
    const errRef = useRef();
    const router = useRouter();

    const [formData, setFormData] = useState({
      name: '',
      username: '',
      password: '',
      confirm_password: '',
    });

    const [validUsername, setValidUsername] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validConfirm_Password, setValidConfirm_Password] = useState(false);

    const [usernameFocus, setUsernameFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [confirm_passwordFocus, setConfirm_PasswordFocus] = useState(false); 
    const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
      const result = USER_REGEX.test(formData.username);
      setValidUsername(result);
  }, [formData.username])

  useEffect(() => {
      const result = PWD_REGEX.test(formData.password);
      setValidPassword(result);
      const match = formData.password === formData.confirm_password;
      setValidConfirm_Password(match);
  }, [formData.password, formData.confirm_password])

  useEffect(() => {
      setErrMsg('');
  }, [formData.username, formData.password, formData.confirm_password])

    const handleChange = e => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = async e => {
      e.preventDefault();

      const v1 = USER_REGEX.test(formData.username);
      const v2 = PWD_REGEX.test(formData.password);
      if (!v1 || !v2) {
          setErrMsg("Invalid Entry");
          return;
      }

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
        toast.success('Registration Successful!');
        router.push('/sign-in');
      }
    }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-5 mb-2 text-center text-4xl font-bold">
            Register to Explore More!
        </h2>
        <p ref={errRef} className={errMsg ? 'text center bg-red-500 rounded-md text-white' : 'absolute left-[9999px]'}>{errMsg}</p>
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
              <div className="mt-2 relative">
                <span className={validUsername ? "absolute right-2 top-2.5" : "hidden"}>
                    <FaCheck className="text-green-500" />
                </span>
                <span className={validUsername || !formData.username ? "hidden" : "absolute right-2 top-2.5"}>
                    <FaTimes className="text-red-500" />
                </span>
                <input
                  id="username"
                  name="username"
                  type="text"
                  ref={usernameRef}
                  autoComplete="current-password"
                  required
                  onChange={handleChange}
                  onFocus={() => setUsernameFocus(true)}
                  onBlur={() => setUsernameFocus(false)}
                  placeholder="unique-username"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p id="uidnote" className={usernameFocus && username && !validUsername ? "bg-slate-800 text-sm text-white rounded p-2" : "hidden"}>
                    4 to 24 characters.
                    Must be unique.
                    Must begin with a letter.
                    Letters, numbers, underscores, hyphens allowed.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <span className={validPassword ? "absolute right-2 top-2.5" : "hidden"}>
                    <FaCheck className="text-green-500" />
                </span>
                <span className={validPassword || !formData.password ? "hidden" : "absolute right-2 top-2.5"}>
                    <FaTimes className="text-red-500" />
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  onChange={handleChange}
                  required
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  placeholder="secure-password"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p id="pwdnote" className={passwordFocus && !validPassword ? "bg-slate-800 text-sm text-white rounded p-2" : "hidden"}>
                    8 to 24 characters
                    Must include uppercase and lowercase letters, a number and a special character.
                    Allowed special characters: ! @ # $ %
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2 relative">
                <span className={validConfirm_Password && formData.confirm_password ? "absolute right-2 top-2.5" : "hidden"}>
                    <FaCheck className="text-green-500" />
                </span>
                <span className={validConfirm_Password || !formData.confirm_password ? "hidden" : "absolute right-2 top-2.5"}>
                    <FaTimes className="text-red-500" />
                </span>
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  autoComplete="off"
                  onChange={handleChange}
                  required
                  onFocus={() => setConfirm_PasswordFocus(true)}
                  onBlur={() => setConfirm_PasswordFocus(false)}
                  placeholder="secure-password (again)"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p id="confirmnote" className={confirm_passwordFocus && !validConfirm_Password ? "bg-slate-800 text-sm text-white rounded p-2" : "hidden"}>
                    Must match the first password input field.
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={!validUsername || !validPassword || !validConfirm_Password ? true : false}
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