'use client';

import { FunctionComponent, useState } from "react";
import { PencilSquareIcon, CheckCircleIcon } from '@heroicons/react/20/solid';
import { iEditRow } from "@/types/general";

export const EditRow: FunctionComponent<iEditRow> = ({
  title, 
  content, 
  name, 
  readonly, 
  onSave
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [val, setVal] = useState<string | number>(content);
  const [lastVal, setLastVal] = useState<string | number>(content);

  const saveHandler = () => {
    setIsEdit(false);
    
    if (val != lastVal) {
      onSave(name, val);
      setLastVal(val);
    }
    
  }

  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 text-gray-900">{title}</dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex items-center">
        {isEdit ? (
          <input
            type="text"
            name={title}
            value={val}
            onChange={e => { setVal(e.target.value) }}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        ) : val}   

        { !readonly ? (
          <>
            { isEdit ? (
              <button className="ml-5" onClick={saveHandler}>
                <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              </button>
            ) : (
              <button className="ml-5" onClick={() => setIsEdit(true)}>
                <PencilSquareIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              </button>
            )} 
          </>
        ) : null }

            
        
      </dd>      
    </div>
  )
}
