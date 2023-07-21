import Image from "next/image"
import aboutPage from "../../../public/images/aboutPage.jpg"

export default function work() {
  return (
    <div className="container-custom mt-20 lg:flex">
      <div className="bg-green-300 lg:w-[35%]">comments</div>
      <div className="bg-red-300 lg:w-[65%] flex flex-wrap order-first">
        <Image src={aboutPage} width={350} alt="image" />
        <Image src={aboutPage} width={350} alt="image" />
        <Image src={aboutPage} width={350} alt="image" />
        <Image src={aboutPage} width={350} alt="image" />
        <Image src={aboutPage} width={350} alt="image" />
      </div>
    </div>
  )
}
