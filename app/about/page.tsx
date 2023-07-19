import Image from "next/image"
import AboutUs from "../../public/images/aboutPage.jpg"

const About = () => {
  return (
    <div className="container h-[50vh]">
      <h1 className=" mt-20 text-center text-4xl font-bold">About Us</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image src={AboutUs} alt="About Us" width={800} height={600} objectFit="cover" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="my-6 text-2xl font-medium">Our Story</h2>
          <p className="mb-6">
            At DSB General Construction, we have been transforming houses into dream homes for many years. Our
            passion for design, craftsmanship, and customer satisfaction sets us apart in the industry.
          </p>
          <p className="mb-6">
            We believe that every home deserves to be beautiful and functional. Our team of experienced
            professionals works closely with clients to understand their vision, providing innovative
            solutions that meet their unique needs and exceed their expectations.
          </p>
          <p className="mb-6">
            With a focus on quality and attention to detail, we take pride in delivering exceptional results.
            Whether it's a kitchen remodel, bathroom renovation, or a complete home makeover, we approach each
            project with dedication and commitment to creating spaces that our clients love to call home.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
