import Link from "next/link"
import { socialMediaLinks } from "../../data/socialMediaLinks"
import { FaMapLocationDot } from "react-icons/fa6"
import { BsWhatsapp } from "react-icons/bs"
import { MdMailOutline } from "react-icons/md"

export default function Contact() {
  return (
    <div className="bg-gray-100 text-gray-700">
      <div className="container-custom">
        <div className="my-40  md:mt-72 ">
          <h1 className="text-5xl font-bold">Schedule a Free Estimate</h1>
          <p className="mb-20 mt-6 max-w-2xl text-[1.4rem] font-light">
            We are located in Fort Washington, Maryland. We service Northern Virginia and Southern Maryland
            including PG County, Calvert County, Anne Arundel County Charles County and St. Mary’s County.
          </p>
          <div className="flex flex-wrap gap-16">
            {socialMediaLinks.map((link, index) => (
              <Link
                key={index}
                className="text-5xl "
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="my-36 space-y-28 md:flex md:flex-wrap md:items-end md:justify-between">
          <div className="bg-black bg-opacity-20 mx-auto md:mx-0 px-10 py-10 h-[17rem] max-w-[23rem] md:w-[23rem] rounded-md flex flex-col justify-evenly">
            <p className="text-5xl mb-10">
              <MdMailOutline />
            </p>
            <div className="text-[1.8rem]">Send us an email</div>
            <div className="text-xl font-light">email123@gmail.com</div>
          </div>
          <div className="bg-black bg-opacity-20 mx-auto md:mx-0 px-10 py-10 h-[21rem] max-w-[23rem] md:w-[24rem] rounded-md flex flex-col justify-evenly">
            <p className="text-[4.7rem] mb-7">
              <BsWhatsapp />
            </p>
            <div className="text-[2.2rem]">WhatsApp</div>
            <div className="text-2xl font-light">+1 999 999 9999</div>
          </div>
          <div className="bg-black bg-opacity-20 mx-auto md:mx-0 px-10 py-10 h-[16rem] max-w-[23rem] md:w-[23rem] rounded-md flex flex-col justify-evenly">
            <p className="text-5xl mb-10">
              <FaMapLocationDot />
            </p>
            <div className="text-[1.8rem]">Our Location</div>
            <div className="text-xl font-light">Fort Washington, MD 20744</div>
          </div>
        </div>
      </div>
    </div>
  )
}
