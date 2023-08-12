"use client"
import { useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileNavbar from "./MobileNavbar"
import { FaPhone } from "react-icons/fa"

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
    label: "Gallery",
    href: "/gallery",
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
  const pathname = usePathname()

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true)
  }

  const renderNavLinks = () => {
    return navLinks.map((link, index) => (
      <Link
        key={index}
        href={link.href}
        className={`px-2 leading-7 transition-all text-lg ${
          pathname === link.href ? "text-primary" : "hover:text-gray-400"
        }`}
      >
        {link.label}
      </Link>
    ))
  }

  return (
    <header className="fixed top-0 z-10 w-full bg-background text-white">
      <nav className="container-custom flex h-20 items-center justify-between">
        <div className="flex items-center lg:flex-1">
          <Link href="/">
            <span className="text-2xl font-semibold">
              <span className="text-primary">DSB</span> General Construction
            </span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-7">{renderNavLinks()}</div>
        <a
          href="tel:999-999-9999"
          className="hidden py-2 px-4 leading-7 border-primary rounded-md border-2 lg:flex items-center ml-8 hover:bg-primary transition-all ease-in-out duration-300"
        >
          <FaPhone className="inline-block text-primary text-xl" />
          <span className="text-lg ml-3">999-999-9999</span>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={handleMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <MobileNavbar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          navLinks={navLinks}
        />
      )}
    </header>
  )
}
