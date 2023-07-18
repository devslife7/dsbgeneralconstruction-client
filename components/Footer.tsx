import { socialMediaLinks } from "../data/socialMediaLinks"

export default function Footer() {
  return (
    <footer className="bg-background text-white">
      <div className="mx-auto flex h-52 max-w-7xl flex-col items-center justify-center gap-y-4 md:flex-row md:justify-around">
        <div className="px-6 text-center text-xl">DSB General Construction</div>
        <div className="px-6 text-center">
          Copyright © 2023 DSB General Construction. All rights reserved.
        </div>
        <div className="flex justify-center gap-x-6 px-6">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              className="text-3xl"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
