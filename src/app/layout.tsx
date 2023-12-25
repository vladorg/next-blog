import type { Metadata } from 'next'
import '../assets/css/globals.css'
import { Header } from '@/components/layout/Header'
import { Toaster } from 'react-hot-toast'
import { useAuth } from '@/hooks/useAuth'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export const dynamic = 'force-dynamic'; // fix cookies error when build

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { isAuth, info } = await useAuth();  
  
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 min-h-[120vh] flex flex-col">
          <Header isAuth={isAuth} info={info} />
          {children}
          <Footer />
        </div>

        <Toaster position="top-right" toastOptions={ { duration: 3000 } } />
      </body>
    </html>
  )
}
