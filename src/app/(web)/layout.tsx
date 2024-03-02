import Header from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import ThemeProvider from '@/components/CLIENT/ThemeProvider/ThemeProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NextAuthProvider } from '@/components/CLIENT/AuthProvider/AuthProvider'
import Head from 'next/head'
    
const inter = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DownTown',
  description: 'Discover the best hotel rooms now!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider>
          <ToastContainer />
          <NextAuthProvider>
            <main className='font-normal'>

              {children}

            </main>
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
