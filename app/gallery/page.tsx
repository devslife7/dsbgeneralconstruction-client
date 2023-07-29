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

export default function Work() {
  const [openModal, setOpenModal] = useState<string | undefined>()
  const props = { openModal, setOpenModal }

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [photos, setPhotos] = useState<any[]>([])
  const [currentWork, setCurrentWork] = useState({ image_urls: [] })
  const [gallery, setGallery] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchGallery()
      console.log("response:", response)
      setGallery(response.data)
    }
    fetchData()
  }, [])

  const renderGallery = () => {
    console.log("renders gallery")
    if (!gallery) return
    if (gallery.length < 1) return

    gallery.sort((a: any, b: any) => b.id - a.id)

    // console.log("gallery::::", gallery) optimize code here
    return gallery.map((work: any, index) => (
      <div key={index} className="w-[350px]">
        <Link href="/gallery/work">
          {work.image_urls[0] && !!work.image_urls[0].match(/.mp4|.mov/) ? (
            <video width="640" height="480" src={work.image_urls[0]} controls autoPlay muted>
              Sorry, your browser doesn't support HTML5 <code>video</code>, but you can download this video
              from
            </video>
          ) : (
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
        <Link href={`/gallery/${work.id}`}>
          <p className="text-gray-700 mt-2 mb-10 ">See more...</p>
        </Link>
        <button className="btn bg-red-500 text-white" onClick={() => handleWorkDelete(work.id)}>
          Delete
        </button>
      </div>
    ))
  }

  const handleWorkDelete = async (work_id: number) => {
    console.log("delete work is id:", work_id)

    const response = await deleteWork(work_id)
    console.log("axios delete:", response.data.work)

    const idx = gallery.findIndex((work: any) => work.id === work_id)

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
      const newWork = updateWorkResponse.data.work
      setCurrentWork(newWork)

      const galleryArray = [...gallery, newWork]

      setGallery(galleryArray)
    }
    setTitle("")
    setDescription("")
    setPhotos([])
    props.setOpenModal(undefined)
  }

  const setImagesArray = (e: any) => {
    const imagesArray = Array.prototype.slice.call(e.target.files)
    const photosToUpload = [...photos]
    imagesArray.some((images: any) => {
      photosToUpload.push(images)
    })
    setPhotos(photosToUpload)
  }

  return (
    <div className="container-custom my-32">
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
                accept=".png, .jpg, .jpeg, .mp4, .mov"
                onChange={e => setImagesArray(e)}
                className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
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
