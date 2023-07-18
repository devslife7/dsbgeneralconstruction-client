import React from "react"

export default function Contact() {
  return (
    <div className="bg-secondary-color">
      <div className="mx-auto max-w-7xl p-6 text-white lg:p-8">
        <div className=" my-28 bg-red-700">
          <p className="bg-yellow-500 text-5xl">Schedule an Free Estimate</p>
          <p className="text-2xl">
            We are located in Fort Washington, Maryland. We service Northern Virginia and Southern Maryland
            including PG County, Calvert County, Anne Arundel County Charles County and St. Mary’s County.
          </p>
          <div>media links</div>
        </div>
        <div className="flex flex-wrap justify-evenly bg-green-500">
          {/* <div className="bg-green-500 sm:flex"> */}
          <div className="h-80 w-80 bg-blue-500">card1</div>
          <div className="h-80 w-80 bg-yellow-500">card1</div>
          <div className="h-80 w-80 bg-purple-500">card1</div>
        </div>
      </div>
    </div>
  )
}
