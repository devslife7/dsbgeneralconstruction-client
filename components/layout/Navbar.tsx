"use client"
import { useEffect, useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileNav from "./MobileNav"
import { FaPhone } from "react-icons/fa"
import { cn } from "@/lib/utils"

interface NavLink {
    label: string
    href: string
}

const navLinks: NavLink[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Work",
        href: "/work",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Contact",
        href: "/contact",
    },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrollNav, setScrollNav] = useState(false)
    const pathname = usePathname()
    const isHome = () => pathname !== "/"

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, [])

    const changeNav = () => {
        if (window.scrollY >= 100) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    const handleMobileMenuOpen = () => {
        setMobileMenuOpen(true)
    }

    const renderNavLinks = () => {
        const isActive = (link: string) => (pathname === link ? "text-primary" : "hover:text-gray-400")
        return navLinks.map((link, index) => (
            <Link
                key={index}
                href={link.href}
                className={`px-2 leading-7 transition-all font-extralight ${isActive(link.href)}`}
            >
                {link.label}
            </Link>
        ))
    }

    return (
        <>
            <div className="h-20 lg:h-32"></div>
            <header className="fixed top-0 z-10 w-full transition-all duration-300 ease-in-out bg-backgroundGray">
                <nav className="flex items-center justify-between h-20 lg:h-32 my-container">
                    <div className="flex items-center lg:flex-1">
                        <Link href="/">
                            <span className="text-2xl font-medium opacity-80">
                                <span className="text-primary">DSB</span> General Construction
                            </span>
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-7">{renderNavLinks()}</div>

                    <span className="ml-5 font-extralight">123-456-7890</span>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={handleMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="w-6 h-6 text-white" aria-hidden="true" />
                        </button>
                    </div>
                </nav>
                {mobileMenuOpen && (
                    <MobileNav
                        mobileMenuOpen={mobileMenuOpen}
                        setMobileMenuOpen={setMobileMenuOpen}
                        navLinks={navLinks}
                    />
                )}
            </header>
        </>
    )
}
