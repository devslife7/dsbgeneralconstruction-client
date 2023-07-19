import Link from "next/link"
import { socialMediaLinks } from "../../data/socialMediaLinks"

export default function Contact() {
  return (
    <div className="bg-background text-white">
      <div className="mx-auto max-w-7xl p-4 lg:p-8">
        <div className=" my-20  md:my-40 md:mb-44">
          <h1 className=" text-5xl font-bold">Schedule a Free Estimate</h1>
          <p className="mb-10 mt-6 max-w-2xl text-2xl font-normal">
            We are located in Fort Washington, Maryland. We service Northern Virginia and Southern Maryland
            including PG County, Calvert County, Anne Arundel County Charles County and St. Mary’s County.
          </p>
          <div className="flex gap-10">
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
        <div className="my-36 flex flex-wrap items-end justify-between">
          <div className="z-[0] h-80 w-80 rounded-md bg-black bg-opacity-20">
            <p>Icon</p>
            <div>Header</div>
            <div>subtext</div>
          </div>
          <div className="h-96 w-96 bg-black bg-opacity-20 text-white">
            <div>Icon</div>
            <div>Header</div>
            <div>subtext</div>
          </div>
          <div className="h-80 w-80 bg-black bg-opacity-20">
            <div>Icon</div>
            <div>Header</div>
            <div>subtext</div>
          </div>
        </div>
      </div>
    </div>
  )
}
