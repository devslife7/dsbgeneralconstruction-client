import { Dialog } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation"

type ObjectType = {
  href: string
  label: string
}

type Props = {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (val: boolean) => void
  navLinks: ObjectType[]
}

export default function NavDialog({ mobileMenuOpen, setMobileMenuOpen, navLinks }: Props) {
  const pathname = usePathname()

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <span className=" text-2xl font-semibold text-primary-color">DSB</span>
          <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={closeMobileMenu}>
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
