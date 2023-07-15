import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'dsbgeneralconstruction',
//   description: 'Home improvement contractor',
// }
export const metadata: Metadata = {
  title: 'project 1',
  description: 'project 1',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
