"use client"
// import { DirectUpload } from "activestorage"
// import * as ActiveStorage from "@rails/activestorage"
import { useEffect, useState } from "react"
import { Button, Modal } from "flowbite-react"
import { fetchGallery, updateWorkFiles, createWork, deleteWork } from "../../utils/api_calls"
import GalleryCard from "./GalleryCard"

export default function Work() {
  const [openModal, setOpenModal] = useState<string | undefined>()
  const props = { openModal, setOpenModal }

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [photos, setPhotos] = useState<any[]>([])
  const [currentWork, setCurrentWork] = useState({ image_urls: [] })
  const [gallery, setGallery] = useState<any[]>([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchGallery()
      setGallery(response.data)
    }
    fetchData()
  }, [])

  const renderGallery = () => {
    gallery.sort((a: any, b: any) => b.id - a.id)
    return gallery.map((work: any, index: number) => (
      <GalleryCard key={index} work={work} handleWorkDelete={handleWorkDelete} />
    ))
  }

  const handleWorkDelete = async (work_id: number) => {
    await deleteWork(work_id)
    const idx = gallery.findIndex((work: any) => work.id === work_id)
    const galleryArray = [...gallery.slice(0, idx), ...gallery.slice(idx + 1)]
    setGallery(galleryArray)
  }

  const handleImageUpload = async () => {
    setIsLoading(true)
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
    setIsLoading(false)
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

  const handlePasswordSubmit = () => {
    const pass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    setIsLoggedIn(pass === password)
  }

  return (
    <div className="container-custom my-32">
      <div>
        <Button onClick={() => props.setOpenModal("default")} className="bg-primary">
          Add Work...
        </Button>
        <Modal show={props.openModal === "default"} onClose={() => props.setOpenModal(undefined)}>
          {/* {!isLoggedIn && (
            <div className="m-20">
              <label className="mb-10">Enter Admin password</label>
              <br />
              <input
                placeholder="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Button className="btn" onClick={handlePasswordSubmit}>
                {isLoading? "Loading..." : "Submit"}
              </Button>
            </div>
          )} */}
          {true && (
            <>
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
                  {isLoading ? "Loading..." : "Submit"}
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
            </>
          )}
        </Modal>
      </div>

      <div className="flex flex-wrap gap-10">{renderGallery()}</div>
    </div>
  )
}
