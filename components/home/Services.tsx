import { RxDotFilled } from "react-icons/rx"

const servicesList = [
  "Concrete",
  "Remodeling",
  "Fences",
  "Flooring",
  "Electrical",
  "Carpentry",
  "Hauling",
  "Land Clearing",
  "Painting",
  "Moving",
  "Landscaping",
  "Plumbing",
]

export default function Services() {
  const renderServices = () => {
    return servicesList.map((serviceName, idx) => (
      <>
        <span key={idx} className="inline-block leading-relaxed">
          {serviceName}
        </span>
        <RxDotFilled className="inline-block mx-2 text-primary" />
      </>
    ))
  }
  return (
    <div className="flex flex-col items-center px-1">
      <h2 className="block mt-10 mb-4 text-4xl text-gray-700 lg:mb-12 lg:mt-24 lg:text-5xl">Our Services</h2>
      <div className="max-w-[70rem] text-gray-600 text-center text-xl lg:text-3xl">
        {renderServices()}
        <span>etc</span>
      </div>
    </div>
  )
}
