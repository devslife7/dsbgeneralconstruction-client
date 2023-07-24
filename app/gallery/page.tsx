"use client"
// import { DirectUpload } from "activestorage"
import * as ActiveStorage from "@rails/activestorage"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiFillStar } from "react-icons/ai"

ActiveStorage.start()

type WorkType = {
  img: string[]
  title: string
  subtitle: string
}
const workGallery: WorkType[] = [
  {
    img: [],
    title: "Kitchen",
    subtitle: "The layout was reconfigured for better workflow, and new flooring.",
  },
  {
    img: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://plus.unsplash.com/premium_photo-1681690860621-57d749a22f34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    ],
    title: "Kitchen",
    subtitle: "The layout was reconfigured for better workflow, and new flooring.",
  },
  {
    img: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://plus.unsplash.com/premium_photo-1681690860621-57d749a22f34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    ],
    title: "Kitchen",
    subtitle: "The layout was reconfigured for better workflow, and new flooring.",
  },
  {
    img: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://plus.unsplash.com/premium_photo-1681690860621-57d749a22f34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    ],
    title: "Kitchen",
    subtitle: "The layout was reconfigured for better workflow, and new flooring.",
  },
  {
    img: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://plus.unsplash.com/premium_photo-1681690860621-57d749a22f34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    ],
    title: "Kitchen",
    subtitle: "The layout was reconfigured for better workflow, and new flooring.",
  },
]

export default function Work() {
  const [images, setImages] = useState({})
  const [avatar, setAvatar] = useState("")
  const renderGallery = () => {
    return workGallery.map((work, index) => (
      <div key={index} className="w-[350px]">
        <Link href="/gallery/work">
          <Image src={work.img[0]} alt={work.title} width={390} height={600} objectFit="cover" />
        </Link>
        <div className="flex justify-between">
          <div>{work.title}</div>
          <div>
            <span>4.5</span>
            <AiFillStar className="inline-block text-primary text-lg" />
          </div>
        </div>
        <div>{work.subtitle}</div>
        <Link href="/gallery/work">
          <p className="text-gray-700 mt-2 mb-10 text-xl">See more...</p>
        </Link>
      </div>
    ))
  }

  const handleImageUpload = (e: any) => {
    // const formData = new FormData()
    // const imagesArray = Array.prototype.slice.call(e.target.files)
    // setImages(imagesArray)

    // imagesArray.forEach((img, index) => formData.append("images[]", img))

    // console.log("fordaa:", formData)

    const formData = new FormData()
    formData.append("avatar", avatar)

    const uploadURL = "http://localhost:3001" + "/uploadAvatar/"

    if (!!avatar) {
      fetch(uploadURL + "5", {
        method: "PATCH",
        body: formData,
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
        .catch(err => console.log("Avatar Fetch Error: ", err))
    }
  }

  return (
    <div className="container-custom my-32">
      <div className="btn bg-primary text-white">Add work...</div>
      <div className="my-10 space-y-4">
        <div>New Work</div>

        {/* <input
          id="imageUpload"
          type="file"
          multiple
          placeholder="testing"
          onChange={e => handleImageUpload(e)}
        /> */}
        <input id="customFile" type="file" placeholder="hello" onChange={e => setAvatar(e.target.files[0])} />
        <button onClick={handleImageUpload} className="btn">
          Submit
        </button>
      </div>

      <div className=" flex justify-center lg:justify-evenly xl:justify-start gap-5 flex-wrap">
        {renderGallery()}
      </div>
    </div>
  )
}
