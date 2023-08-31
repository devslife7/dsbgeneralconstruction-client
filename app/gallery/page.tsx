"use client"
// import { DirectUpload } from "activestorage"
// import * as ActiveStorage from "@rails/activestorage"
import { useEffect, useState } from "react"
import { fetchGallery, deleteWork } from "@/utils/api_calls"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { HiPlus } from "react-icons/hi"
import CreateWorkForm from "@/components/gallery/CreateWorkForm"
import AdminPasswordForm from "@/components/gallery/work/AdminPasswordForm"
import { GalleryItems } from "@/components/gallery/galleryItems"

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

    const addToGallery = (work: any) => {
        setGallery([...gallery, work])
    }

    const handlePasswordSubmit = (e: any) => {
        e.preventDefault()
        const pass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD
        if (pass === password) {
            setIsLoggedIn(true)
            // save to local storage here
            // localStorage.setItem("user", "dN4DJ5MdkW")
        } else {
            alert("Incorrect password, please try again")
            setPassword("")
        }
    }

    return (
        <div className="my-8 my-container">
            {/* {renderGallery()} */}
            <GalleryItems gallery={gallery} />

            <Button onClick={openModal}>
                <HiPlus />
                Add Work
            </Button>

            {true ? (
                <Modal title="Add Work Form" isModalOpen={isModalOpen} closeModal={closeModal}>
                    <CreateWorkForm closeModal={closeModal} addToGallery={addToGallery} />
                </Modal>
            ) : (
                <Modal title="Enter Admin Password" isModalOpen={isModalOpen} closeModal={closeModal}>
                    <AdminPasswordForm
                        password={password}
                        setPassword={setPassword}
                        closeModal={closeModal}
                        handlePasswordSubmit={handlePasswordSubmit}
                    />
                </Modal>
            )}
        </div>
    )
}
