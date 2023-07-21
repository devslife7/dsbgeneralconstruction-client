import Image from "next/image"
import aboutPage from "../../../public/images/aboutPage.jpg"

export default function work() {
  return (
    <div className="container-custom mt-20 lg:flex">
      <div className="bg-green-300 lg:w-[35%]">comments</div>
      <div className="bg-red-300 lg:w-[65%] flex justify-center flex-wrap order-first my-20">
        <Image src={aboutPage} width={350} alt="image" />
        <Image src={aboutPage} width={350} alt="image" />
        <Image src={aboutPage} width={350} alt="image" />
        <Image src={aboutPage} width={350} alt="image" />
        <Image src={aboutPage} width={350} alt="image" />
      </div>
    </div>
  )
}
