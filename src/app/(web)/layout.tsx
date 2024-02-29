import Header from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NextAuthProvider } from '@/components/AuthProvider/AuthProvider'

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
      <body className={inter.className}>
        <ThemeProvider>
          <ToastContainer />
          <NextAuthProvider>
            <main className='font-normal'>
              {/* Header */}
              <Header />
              {children}
              {/* Footer */}
              <Footer />
            </main>
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
