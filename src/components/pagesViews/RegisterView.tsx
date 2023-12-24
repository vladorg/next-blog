'use client';

import { registerAction } from "@/actions/auth/registerAction";
import Link from "next/link"
import { redirect } from "next/navigation";
import { useRef } from "react";
import toast from "react-hot-toast";


const RegisterView = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const actionHandler = async (formData: FormData) => {
    const password = formData.get('password');
    const password_repeat = formData.get('password_repeat');    

    if (password != password_repeat) {
      toast.error('Password and password repeat are not match!');
      console.log('Password and password repeat are not match!');      

      return
    }   

    const { message, newUser } = await registerAction(formData); 

    if (newUser) {
      toast.success(`Success register: ${newUser.login}`);
      redirect('/signin/');
    } else {
      toast.error(message);
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" ref={formRef} action={e => actionHandler(e)}>

            <div>
              <label htmlFor="login" className="block text-sm font-medium leading-6 text-gray-900">
                Login
              </label>
              <div className="mt-2">
                <input
                  id="login"
                  name="login"
                  type="text"
                  
                  autoComplete="off"
                  placeholder="Super_Login"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2">
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Your Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  
                  autoComplete="off"
                  placeholder="Lindsay Walton"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-8">
              <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                Role
              </label>
              <div className="mt-2">
                <input
                  id="role"
                  name="role"
                  type="text"
                  
                  autoComplete="off"
                  placeholder="Front/Back end dev., UI/UX Designer, QA"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password_repeat" className="block text-sm font-medium leading-6 text-gray-900">
                  Repeat Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password_repeat"
                  name="password_repeat"
                  type="password"
                  
                  autoComplete="off"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Have account?{' '}
            <Link href="/signin/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Log in</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default RegisterView
