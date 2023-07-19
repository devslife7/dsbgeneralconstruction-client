import "../styles/globals.css"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/Footer"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "dsbgeneralconstruction",
  description: "Home improvement contractor",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen flex-col justify-between`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
