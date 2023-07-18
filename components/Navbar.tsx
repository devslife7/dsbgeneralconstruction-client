"use client"
import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import logoMain from "../public/icons/mainLogo.png"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pathname = usePathname()

  const navLinks = [
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

  return (
    <header className="bg-background text-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Navigation bar"
      >
        <div className="flex items-center lg:flex-1">
          {/* <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-8 w-auto" src={logoMain} alt="Company Logo" />
          </Link> */}
          <Link href="/">
            <span className="text-2xl font-semibold">
              <span className="text-primary-color">DSB</span> General Construction
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="px-2 leading-7">(999)999-9999</div>

          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`px-2 leading-7 ${
                pathname === link.href ? "text-primary-color" : "hover:text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image className="h-8 w-auto" src={logoMain} alt="Company Logo" />
            </a> */}
            <span className=" text-2xl font-semibold text-primary-color">DSB</span>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 ${
                      pathname === link.href && "text-primary-color"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
