import { MdAddHomeWork } from "react-icons/md"
import { BiTimeFive } from "react-icons/bi"
import { BsPeopleFill } from "react-icons/bs"

export default function KeyPoints() {
  return (
    <div className="my-container">
      <div className="flex flex-wrap justify-start gap-12 my-20 md:gap-0 lg:justify-evenly">
        <div className="max-w-sm p-2 md:text-center">
          <MdAddHomeWork className="mb-6 md:mx-auto text-8xl md:text-6xl text-primary" />
          <h1 className="mb-5 text-4xl font-bold md:text-2xl">Expertise and Experience</h1>
          <p className="text-[1.35rem] text-gray-700 md:text-lg">
            Our craftsmanship ensures that the final outcome is not only visually appealing but also
            structurally sound and durable.
          </p>
        </div>
        <div className="max-w-sm p-2 md:text-center">
          <BsPeopleFill className="mb-6 md:mx-auto text-8xl md:text-6xl text-primary" />
          <h1 className="mb-5 text-4xl font-bold md:text-2xl">Portfolio and References</h1>
          <p className="text-[1.35rem] text-gray-700 md:text-lg">
            Our proven track record is a strong indicator of our reliability, craftsmanship, and ability to
            consistently deliver outstanding results.
          </p>
        </div>
        <div className="max-w-sm p-2 md:text-center">
          <BiTimeFive className="mb-6 md:mx-auto text-8xl md:text-6xl text-primary" />
          <h1 className="mb-5 text-4xl font-bold md:text-2xl">Commitment to Timelines</h1>
          <p className="text-[1.35rem] text-gray-700 md:text-lg">
            We prioritize punctuality and create a realistic project schedule with clear deadlines for each
            phase of the renovation.
          </p>
        </div>
      </div>
    </div>
  )
}
