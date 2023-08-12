import { MdAddHomeWork } from "react-icons/md"
import { BiTimeFive } from "react-icons/bi"
import { BsPeopleFill } from "react-icons/bs"

export default function KeyPoints() {
  return (
    <div className="container-custom ">
      <div className="gap-12 md:gap-0 my-20 flex flex-wrap justify-evenly">
        <div className="md:text-center p-5 max-w-sm">
          <MdAddHomeWork className="md:mx-auto text-8xl md:text-6xl mb-6 text-primary" />
          <h1 className="text-4xl mb-5 font-bold md:text-2xl">Expertise and Experience</h1>
          <p className="text-[1.35rem] text-gray-700 md:text-lg">
            Our craftsmanship ensures that the final outcome is not only visually appealing but also
            structurally sound and durable.
          </p>
        </div>
        <div className="md:text-center p-5 max-w-sm">
          <BsPeopleFill className="md:mx-auto text-8xl md:text-6xl mb-6 text-primary" />
          <h1 className="text-4xl mb-5 font-bold md:text-2xl">Portfolio and References</h1>
          <p className="text-[1.35rem] text-gray-700 md:text-lg">
            Our proven track record is a strong indicator of our reliability, craftsmanship, and ability to
            consistently deliver outstanding results.
          </p>
        </div>
        <div className="md:text-center p-5 max-w-sm">
          <BiTimeFive className="md:mx-auto text-8xl md:text-6xl mb-6 text-primary" />
          <h1 className="text-4xl mb-5 font-bold md:text-2xl">Commitment to Timelines</h1>
          <p className="text-[1.35rem] text-gray-700 md:text-lg">
            We prioritize punctuality and create a realistic project schedule with clear deadlines for each
            phase of the renovation.
          </p>
        </div>
      </div>
    </div>
  )
}
