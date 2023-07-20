import { MdAddHomeWork } from "react-icons/md"
import { BiTimeFive } from "react-icons/bi"
import { BsPeopleFill } from "react-icons/bs"

export default function KeyPoints() {
  return (
    <div className="container-custom ">
      <div className="gap-20 md:gap-0 my-20 flex flex-wrap justify-evenly">
        <div className="md:text-center p-5 max-w-sm">
          <MdAddHomeWork className="md:mx-auto text-9xl md:text-6xl my-14" />
          <h1 className="text-4xl mb-5 font-bold md:text-2xl">Expertise and Experience</h1>
          <p className="text-[1.35rem] text-gray-700 md:text-lg">
            We have a team of skilled professionals with expertise in various aspects of home improvement,
            such as interior design, construction, plumbing, electrical work, and more.
          </p>
        </div>
        <div className="md:text-center p-5 max-w-sm">
          <BsPeopleFill className="md:mx-auto text-9xl md:text-6xl my-14" />
          <h1 className="text-4xl mb-5 font-bold md:text-2xl">Portfolio and References</h1>
          <p className="text-[1.35rem] text-gray-700 md:text-lg">
            A reliable home renovation company will have a strong portfolio showcasing their past projects.
            This portfolio allows potential clients to see the quality and range of their work.
          </p>
        </div>
        <div className="md:text-center p-5 max-w-sm">
          <BiTimeFive className="md:mx-auto text-9xl md:text-6xl my-14" />
          <h1 className="text-4xl mb-5 font-bold md:text-2xl">Commitment to Timelines</h1>
          <p className="text-[1.35rem] text-gray-700 md:text-lg">
            We know that delays can inconvenience homeowners and disrupt their daily routines. Therefore, we
            prioritize punctuality and create a realistic project schedule with clear deadlines for each phase
            of the renovation.
          </p>
        </div>
      </div>
    </div>
  )
}
