import "@/styles/globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "dsbgeneralconstruction",
  description: "Home improvement contractor",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <body className={`${inter.className} flex flex-col justify-between`}> */}
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      {/* </body> */}
    </html>
  )
}
