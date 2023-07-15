import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'

const socialMediaLinks = [
  {
    label: 'Facebook',
    href: 'https://www.instagram.com/dsbgeneralconstruction/',
    icon: <FaFacebook />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dsbgeneralconstruction/',
    icon: <FaInstagram />,
  },
  {
    label: 'Twitter',
    href: 'https://www.instagram.com/dsbgeneralconstruction/',
    icon: <FaTwitter />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.instagram.com/dsbgeneralconstruction/',
    icon: <FaLinkedin />,
  },
  {
    label: 'GitHub',
    href: 'https://www.instagram.com/dsbgeneralconstruction/',
    icon: <FaGithub />,
  },
  {
    label: 'Youtube',
    href: 'https://www.instagram.com/dsbgeneralconstruction/',
    icon: <FaYoutube />,
  },
]

export default function Footer() {
  return (
    <footer className="bg-slate-300">
      {/* <div className="mx-auto flex flex-col max-w-7xl items-center justify-around p-6 h-48"> */}
      <div className="flex flex-col justify-center gap-y-4 h-52 mx-auto max-w-7xl md:flex-row md:justify-around items-center">
        <div className="text-xl text-center ">DSB General Construction</div>
        <div className="text-center">Copyright © 2023 DSB General Construction. All rights reserved.</div>
        <div className="flex gap-x-6 justify-center">
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
