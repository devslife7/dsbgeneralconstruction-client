"use client"
import { useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation"
import NavDialog from "./NavDialog"

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
  const pathname = usePathname()

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true)
  }

  return (
    <header className="fixed top-0 z-10 w-full bg-background text-white">
      <nav className="container flex h-[4.5rem] items-center justify-between">
        <div className="flex items-center lg:flex-1">
          <Link href="/">
            <span className="text-2xl font-semibold">
              <span className="text-primary">DSB</span> General Construction
            </span>
          </Link>
        </div>
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
        <div className="hidden lg:flex lg:gap-x-7">
          <div className="px-2 leading-7">(999)999-9999</div>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`px-2 leading-7 ${pathname === link.href ? "text-primary" : "hover:text-gray-400"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      {mobileMenuOpen && (
        <NavDialog
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          navLinks={navLinks}
        />
      )}
    </header>
  )
}