import { Dialog } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MdHomeWork } from "react-icons/md"

type ObjectType = {
  href: string
  label: string
}

type Props = {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (val: boolean) => void
  navLinks: ObjectType[]
}

export default function MobileNav({ mobileMenuOpen, setMobileMenuOpen, navLinks }: Props) {
  const pathname = usePathname()

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <Dialog as="div" className="lg:hidden transition-all" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed top-0 bottom-0 right-0 z-10 w-full overflow-y-auto bg-background bg-opacity-[0.99] text-white px-6 py-6 max-w-[15rem] sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <MdHomeWork className="text-4xl text-primary" />
          <button type="button" className="-m-2.5 rounded-md p-2.5 " onClick={closeMobileMenu}>
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-10 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  className={`-mx-2 block rounded-lg px-3 py-4 font-medium leading-7 text-lg ${
                    pathname === link.href && "text-primary"
                  }`}
                  onClick={closeMobileMenu}
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
  )
}
