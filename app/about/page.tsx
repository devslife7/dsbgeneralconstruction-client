import Image from "next/image"
import AboutUs from "../../public/images/aboutPage.jpg"

const About = () => {
  return (
    <div className="container-custom sm:h-screen flex items-center py-40">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-14">
          <Image
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="About Us"
            width={800}
            height={600}
            objectFit="cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 ">
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
