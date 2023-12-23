'use client';

import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { iTokenPayload } from '@/types/general';

export const Header = ({
  isAuth, 
  info
}: {
  isAuth: boolean,
  info: iTokenPayload | null
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();  

  const links = [
    { title: 'Home', href: '/'},
  ]

  const linksPrivate = [
    { title: 'Home', href: '/'},
    { title: 'Add post', href: '/add'},
  ];
  

  return (
    <>
      <header className="bg-white">

        <nav className="flex items-center justify-between p-6" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="logo" width={40} height={32} className="h-8 w-auto" unoptimized />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">      
          
          { isAuth ? linksPrivate && linksPrivate.map(({title, href}) => (
            <Link 
              key={href}
              href={href} 
              className={`text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 ${href == pathname ? 'text-indigo-600' : ''}`}
            >
              {title}
            </Link>
          )) : (
            links && links.map(({title, href}) => (
              <Link 
                key={href}
                href={href} 
                className={`text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 ${href == pathname ? 'text-indigo-600' : ''}`}
              >
                {title}
              </Link>
            ))
          )}

          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            { !isAuth ? (
              <>
                <Link href="/register/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 mr-2">Register</Link>
                |
                <Link href="/signin/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 ml-2">Log in <span aria-hidden="true">&rarr;</span></Link>
              </>
            ) : (
              <>
                <Link href={`/account/${info?.userId}`} className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 mr-1 underline">{info?.user} (My account)</Link>
                <p className="text-sm font-semibold leading-6 text-gray-900 underline mx-1">|</p>
                <Link href="/logout/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">Logout</Link>
              </>
            )}
          </div>
        </nav>


        {/* mobile menu */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="logo" width={40} height={32} className="h-8 w-auto" unoptimized />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  )
}
