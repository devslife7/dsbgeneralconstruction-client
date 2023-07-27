"use client"
// import { DirectUpload } from "activestorage"
// import * as ActiveStorage from "@rails/activestorage"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AiFillStar } from "react-icons/ai"
import { Button, Modal } from "flowbite-react"
import { fetchGallery, updateWorkFiles, createWork, deleteWork } from "../../utils/api_calls"
// import axios from "axios"

// ActiveStorage.start()

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

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [photos, setPhotos] = useState([])
  const [currentWork, setCurrentWork] = useState({ image_urls: [] })
  const [gallery, setGallery] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchGallery()
      setGallery(response.data)
    }
    fetchData()
  }, [])

  const renderGallery = () => {
    console.log("gallery:", gallery)
    if (!gallery) return
    if (gallery.length < 1) return
    console.log("gallery::::", gallery)
    return gallery.map((work, index) => (
      <div key={index} className="w-[350px]">
        <Link href="/gallery/work">
          {work.image_urls[0] && (
            <Image
              src={work.image_urls[0]}
              alt={work.title}
              width={390}
              height={600}
              className="object-cover"
            />
          )}
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
        <button className="btn-error" onClick={() => handleWorkDelete(work.id)}>
          Delete
        </button>
      </div>
    ))
  }

  const handleWorkDelete = async (work_id: number) => {
    console.log("delete work is id:", work_id)

    const response = await deleteWork(work_id)
    console.log("axios delete:", response.data.work)

    const idx = gallery.findIndex(work => work.id === work_id)

    const galleryArray = [...gallery.slice(0, idx), ...gallery.slice(idx + 1)]

    setGallery(galleryArray)
  }

  const handleImageUpload = async () => {
    const formData = new FormData()
    photos.forEach(photo => formData.append(`images[]`, photo))

    if (!!photos) {
      const workResponse = await createWork(title, description)
      const work_id = workResponse.data.work.id

      const updateWorkResponse = await updateWorkFiles(work_id, formData)
      setCurrentWork(updateWorkResponse.data.work)
    }
    setTitle("")
    setDescription("")
    setPhotos([])
    props.setOpenModal(undefined)
  }

  const setImagesArray = (e: any) => {
    const imagesArray = Array.prototype.slice.call(e.target.files)
    const photosToUpload = [...photos]
    imagesArray.some((images: string) => {
      photosToUpload.push(images)
    })
    setPhotos(photosToUpload)
  }

  const renderCurrentWork = () => {
    if (currentWork.image_urls === undefined) return
    return currentWork.image_urls.map((url, index) => (
      <Image key={index} src={url} width={300} height={400} alt="alt for now" />
    ))
  }

  return (
    <div className="container-custom my-32">
      {renderCurrentWork()}

      <div>
        <Button onClick={() => props.setOpenModal("default")} className="bg-primary">
          Add Work...
        </Button>
        <Modal show={props.openModal === "default"} onClose={() => props.setOpenModal(undefined)}>
          <Modal.Header>Add Work Form</Modal.Header>
          <Modal.Body>
            <div className="flex flex-col space-y-7">
              <input
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <textarea
                id="description"
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
              <input
                id="fileUpload"
                type="file"
                placeholder="hello"
                multiple
                accept=".png, .jpg, .jpeg, .mp4"
                onChange={e => setImagesArray(e)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleImageUpload} className="bg-primary">
              Submit
            </Button>
            <Button
              color="gray"
              onClick={() => {
                props.setOpenModal(undefined)
              }}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="flex flex-wrap gap-10">{renderGallery()}</div>
    </div>
  )
}
