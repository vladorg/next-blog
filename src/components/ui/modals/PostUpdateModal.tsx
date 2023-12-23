'use client'

import { Fragment, FunctionComponent, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export interface iPostUpdateModal {
  title: string,
  content: string,
  postId: string,
  isOpen: boolean,
  onClose: Function,
  onSave: Function
}


export const PostUpdateModal: FunctionComponent<iPostUpdateModal> = ({
  title,
  content,
  postId,
  isOpen, 
  onClose, 
  onSave
}) => {

  const [titleVal, setTitleVal] = useState<string>(title)
  const [contentVal, setContentVal] = useState<string>(content)

  const cancelButtonRef = useRef<HTMLButtonElement>(null)
  const titleInputRef = useRef<HTMLInputElement>(null)
  const contentInputRef = useRef<HTMLTextAreaElement>(null)
  const postInputRef = useRef<HTMLInputElement>(null)

  const saveHandler = () => {
    const newTitle = titleInputRef.current?.value;
    const newContent = contentInputRef.current?.value;
    const currentPostId = postInputRef.current?.value;

    onSave({newTitle, newContent, currentPostId});
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">

          <input type="hidden" value={postId} ref={postInputRef} onChange={() => {}} /> 

          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Post title
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="title"
                          id="post_title"
                          value={titleVal}
                          onChange={e => { setTitleVal(e.target.value) }}
                          ref={titleInputRef}
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
                          id="post_content"
                          value={contentVal}
                          onChange={e => { setContentVal(e.target.value) }}
                          ref={contentInputRef}
                          name="content"
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">*Title is required field!</p>
                    </div>

                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:mr-3 sm:w-auto"
                    onClick={saveHandler}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => onClose()}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
