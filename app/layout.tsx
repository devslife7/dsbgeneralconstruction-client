import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import type { Metadata } from "next"
import { Inter, Lobster, Roboto } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] })

export const metadata: Metadata = {
    title: "dsbgeneralconstruction",
    description: "Home improvement contractor",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-custom-white`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
