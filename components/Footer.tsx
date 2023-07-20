import Link from "next/link"
import { socialMediaLinks } from "../data/socialMediaLinks"

export default function Footer() {
  const renderSocialLinks = () => {
    return socialMediaLinks.map((link, index) => (
      <Link
        key={index}
        className="text-3xl"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
      >
        {link.icon}
      </Link>
    ))
  }

  return (
    <footer className="mt-auto bg-background text-white">
      <div className="container-custom flex h-52 flex-col items-center justify-center gap-y-4 md:flex-row md:justify-between">
        <div className="text-center text-xl">
          <span className="text-primary">DSB</span> General Construction
        </div>
        <div className=" text-center">
          Copyright © 2023 <span className="text-primary">DSB</span> General Construction. All rights
          reserved.
        </div>
        <div className="flex justify-center gap-x-6">{renderSocialLinks()}</div>
      </div>
    </footer>
  )
}
