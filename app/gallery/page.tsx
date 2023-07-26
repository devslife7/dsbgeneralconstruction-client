"use client"
// import { DirectUpload } from "activestorage"
import * as ActiveStorage from "@rails/activestorage"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiFillStar } from "react-icons/ai"
import { Button, Modal } from "flowbite-react"

ActiveStorage.start()

type WorkType = {
  img: string[]
  title: string
  subtitle: string
}
const workGallery: WorkType[] = [
  {
    img: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
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
  const [openModal, setOpenModal] = useState<string | undefined>()
  const props = { openModal, setOpenModal }

  const [photos, setPhotos] = useState([])
  const renderGallery = () => {
    return workGallery.map((work, index) => (
      <div key={index} className="w-[350px]">
        <Link href="/gallery/work">
          <Image src={work.img[0]} alt={work.title} width={390} height={600} className="object-cover" />
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

  const handleImageUpload = () => {
    const uploadURL = "http://localhost:3000" + "/uploadAvatar/"
    const formData = new FormData()
    photos.forEach((photo, index) => formData.append(`images[]`, photo))

    if (!!photos) {
      fetch(uploadURL + "5", {
        method: "PATCH",
        body: formData,
      })
        .then(res => res.json())
        .then(data => {
          console.log("data::", data)
          // setPhotos(data.profile_img)
        })
        .catch(err => console.log("Avatar Fetch Error: ", err))
    }
  }

  const setImagesArray = (e: any) => {
    const imagesArray = Array.prototype.slice.call(e.target.files)
    const photosToUpload = [...photos]

    imagesArray.some((images: string[]) => {
      photosToUpload.push(images)
    })

    setPhotos(photosToUpload)

    console.log("ImagesArray:", imagesArray)
    console.log("ImagesArray:", photosToUpload)
  }

  return (
    <div className="container-custom my-32">
      <div className="btn bg-primary text-white">Add work...</div>
      <div className="my-10 space-y-4">
        <div>New Work</div>
        {/* <label htmlFor="fileUpload" className="text-3xl">
          Upload Here
        </label> */}
        <input
          id="fileUpload"
          type="file"
          placeholder="hello"
          multiple
          // onChange={e => setAvatar(e.target.files)}
          onChange={e => setImagesArray(e)}
        />
        <button onClick={handleImageUpload} className="btn">
          Submit
        </button>
        {/* <video
          width="640"
          height="480"
          src="http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBJZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--13d2b14f3b3283d1242125f7781158910ff22c4d/testVideo.mp4"
          controls
          autoPlay
          muted
        >
          Sorry, your browser doesn't support HTML5 <code>video</code>, but you can download this video from
        </video> */}
      </div>

      <>
        <Button onClick={() => props.setOpenModal("default")}>Toggle modal</Button>
        <Modal show={props.openModal === "default"} onClose={() => props.setOpenModal(undefined)}>
          <Modal.Header>Terms of Service</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for
                its citizens, companies around the world are updating their terms of service agreements to
                comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect on May 25
                and is meant to ensure a common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk data breaches that could
                personally affect them.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => props.setOpenModal(undefined)}>I accept</Button>
            <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )
}
