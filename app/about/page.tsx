import Image from "next/image"
import AboutUs from "../../public/images/aboutPage.jpg"

const About = () => {
  return (
    <div className="container-custom h-screen flex items-center">
      {/* <h1 className="mb-20 mt-40 text-center text-4xl font-bold">About Us</h1> */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-10">
          <Image src={AboutUs} alt="About Us" width={800} height={600} objectFit="cover" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="mb-6 text-5xl font-bold">Our Story</h2>
          <div className="text-[1.4rem] font-light space-y-6 text-gray-700">
            <p>
              At DSB General Construction, we have been transforming houses into dream homes for many years.
              Our passion for design, craftsmanship, and customer satisfaction sets us apart in the industry.
            </p>
            <p>
              With a focus on quality and attention to detail, we take pride in delivering exceptional
              results. Whether it's a kitchen remodel, bathroom renovation, or a complete home makeover, we
              approach each project with dedication and commitment to creating spaces that our clients love to
              call home.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
