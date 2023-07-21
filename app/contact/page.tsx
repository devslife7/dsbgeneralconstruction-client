import Link from "next/link"
import { socialMediaLinks } from "../../data/socialMediaLinks"
import { FaMapLocationDot } from "react-icons/fa6"
import { BsWhatsapp, BsFillTelephoneOutboundFill } from "react-icons/bs"
import { MdMailOutline } from "react-icons/md"

export default function Contact() {
  const renderMediaLinks = () => {
    return socialMediaLinks.map((link, index) => (
      <Link key={index} className="text-5xl hover:text-primary" href={link.href} aria-label={link.label}>
        {link.icon}
      </Link>
    ))
  }

  return (
    <div className="container-custom bg-white">
      <div className="mb-32 mt-44 md:mt-72">
        <h1 className="text-5xl font-bold">Schedule a Free Estimate</h1>
        <p className="mb-14 md:mb-20 mt-8 max-w-2xl text-[1.4rem] font-light text-gray-700">
          We are located in Fort Washington, Maryland. We service Northern Virginia and Southern Maryland
          including PG County, Calvert County, Anne Arundel County Charles County and St. Mary&apos;s County.
        </p>
        <div className="flex flex-wrap gap-10 md:gap-16">{renderMediaLinks()}</div>
      </div>
      <div className="mb-36 space-y-16 lg:flex lg:flex-wrap lg:items-end lg:justify-between gap-5 text-white">
        <div className="bg-black bg-opacity-80 mx-auto md:mx-0 px-10 py-10 h-[21rem] max-w-[23rem] md:w-[24rem] rounded-md flex flex-col justify-evenly">
          <p className="text-[4.7rem] mb-7 text-green-600">
            <BsWhatsapp />
          </p>
          <div className="text-[2.2rem]">WhatsApp</div>
          <div className="text-2xl font-light">+1 999 999 9999</div>
        </div>
        <div className="bg-black bg-opacity-80 mx-auto md:mx-0 px-10 py-10 h-[17rem] max-w-[23rem] md:w-[23rem] rounded-md flex flex-col justify-evenly order-first">
          <p className="text-5xl mb-10 text-blue-500">
            <MdMailOutline />
          </p>
          <div className="text-[1.8rem]">Send us an email</div>
          <div className="text-xl font-light">email123@gmail.com</div>
        </div>
        <div className="bg-black bg-opacity-80 mx-auto md:mx-0 px-10 py-10 h-[16rem] max-w-[23rem] md:w-[23rem] rounded-md flex flex-col justify-evenly">
          <p className="text-5xl mb-10 text-primary">
            <FaMapLocationDot />
          </p>
          <div className="text-[1.8rem]">Our Location</div>
          <div className="text-xl font-light">Fort Washington, MD 20744</div>
        </div>
      </div>
    </div>
  )
}
