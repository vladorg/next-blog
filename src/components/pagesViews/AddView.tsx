'use client'

import { addPostAction } from '@/actions/posts/addPostAction';
import Link from 'next/link';
import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


export const AddView = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [newID, setNewId] = useState<string>('');

  const actionHandler = async (formData: FormData) => {
    const { message, newPost } = await addPostAction(formData);     

    if (newPost) {
      toast.success(`New post added: ${newPost.title}`)
      formRef.current?.reset();
      setSuccess(true);
      setNewId(newPost._id);
    } else {
      toast.error(message);
    }
  } 

  return (
    <>
      <div className="mx-auto max-w-7xl p-6 lg:px-8 py-12 lg:py-32">
        { !success ? (
          <form ref={formRef} action={e => actionHandler(e)}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h1 className="text-3xl sm:text-4xl font-bold leading-7 text-gray-900">Add new post</h1>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                      Post title
                    </label>
                    <div className="mt-2">
                      <input
                        required
                        type="text"
                        name="title"
                        id="post_title"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                      Post content
                    </label>
                    <div className="mt-2">
                      <textarea
                        required
                        id="post_content"
                        name="content"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">All fields are required!</p>
                  </div>

                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-start gap-x-6">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
              <Link href="/"  className="text-sm font-semibold leading-6 text-gray-900">Cancel</Link>
            </div>
          </form>
        ) : (
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-7 text-gray-900">Success!</h2>
            <div className="mt-10">
              <Link href={`/posts/${newID}`} className="mr-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                View post
              </Link>
              <button onClick={() => setSuccess(false)} className="mr-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Add more
              </button>
              <Link href={'/'} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Go to home
              </Link>
            </div>
          </div>
        )}
      </div>

      <Toaster position="top-right" toastOptions={ { duration: 3000 } } />
    </>
  )
}
