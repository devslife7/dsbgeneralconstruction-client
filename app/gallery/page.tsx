"use client"
// import { DirectUpload } from "activestorage"
// import * as ActiveStorage from "@rails/activestorage"
import { useEffect, useState } from "react"
import { fetchGallery, deleteWork } from "@/utils/api_calls"
import GalleryCard from "@/components/gallery/GalleryCard"
import MyModal from "@/components/shared/MyModal"
import Button from "@/components/shared/Button"
import { HiPlus } from "react-icons/hi"
import CreateWorkForm from "@/components/gallery/CreateWorkForm"
import AdminPasswordForm from "@/components/gallery/work/AdminPasswordForm"

export default function Work() {
  const [gallery, setGallery] = useState<any[]>([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => setIsModalOpen(false)
  const openModal = () => setIsModalOpen(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchGallery()
      setGallery(response.data)
    }
    fetchData()
  }, [])

  const renderGallery = () => {
    gallery.sort((a: any, b: any) => b.id - a.id)
    return (
      <div className="flex flex-wrap justify-center gap-5">
        {gallery.map((work: any, index: number) => (
          <GalleryCard key={index} work={work} handleWorkDelete={handleWorkDelete} />
        ))}
      </div>
    )
  }

  const handleWorkDelete = async (work_id: number) => {
    await deleteWork(work_id)
    const idx = gallery.findIndex((work: any) => work.id === work_id)
    const galleryArray = [...gallery.slice(0, idx), ...gallery.slice(idx + 1)]
    setGallery(galleryArray)
  }

  const addToGallery = (work: any) => {
    setGallery([...gallery, work])
  }

  const handlePasswordSubmit = (e: any) => {
    e.preventDefault()
    const pass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    if (pass === password) {
      setIsLoggedIn(true)
      // save to local storage here
      localStorage.setItem("user", "dN4DJ5MdkW")
    } else {
      alert("Incorrect password, please try again")
      setPassword("")
    }
  }

  return (
    <div className="my-8 my-container">
      {renderGallery()}

      <Button onClick={openModal} startIcon={<HiPlus />}>
        Add Work
      </Button>

      {isLoggedIn ? (
        <MyModal title="Add Work Form" isModalOpen={isModalOpen} closeModal={closeModal}>
          <CreateWorkForm closeModal={closeModal} addToGallery={addToGallery} />
        </MyModal>
      ) : (
        <MyModal title="Enter Admin Password" isModalOpen={isModalOpen} closeModal={closeModal}>
          <AdminPasswordForm
            password={password}
            setPassword={setPassword}
            closeModal={closeModal}
            handlePasswordSubmit={handlePasswordSubmit}
          />
        </MyModal>
      )}
    </div>
  )
}
