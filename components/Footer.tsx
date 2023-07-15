import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-slate-300">
      <div className="mx-auto flex max-w-7xl items-center justify-around p-6 h-40">
        <span className="text-xl ">DSB General Construction</span>
        <span>Copyright © 2023 DSB General Construction. All rights reserved.</span>
        <div className="flex gap-x-4">
          <a
            className="text-3xl"
            href="https://www.instagram.com/dsbgeneralconstruction/"
            target="_blank"
            arial-label="Instagram"
          >
            <FaFacebook />
          </a>
          <a
            className="text-3xl"
            href="https://www.instagram.com/dsbgeneralconstruction/"
            target="_blank"
            arial-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            className="text-3xl"
            href="https://www.instagram.com/dsbgeneralconstruction/"
            target="_blank"
            arial-label="Instagram"
          >
            <FaTwitter />
          </a>
          <a
            className="text-3xl"
            href="https://www.instagram.com/dsbgeneralconstruction/"
            target="_blank"
            arial-label="Instagram"
          >
            <FaLinkedin />
          </a>
          <a
            className="text-3xl"
            href="https://www.instagram.com/dsbgeneralconstruction/"
            target="_blank"
            arial-label="Instagram"
          >
            <FaGithub />
          </a>
          <a
            className="text-3xl"
            href="https://www.instagram.com/dsbgeneralconstruction/"
            target="_blank"
            arial-label="Instagram"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  )
}
