"use client"
import { Modal } from "@/components/ui/modal"
import Button from "@/components/ui/button"
import { HiPlus } from "react-icons/hi"
import CreateWorkForm from "./createWorkForm"
import AdminPasswordForm from "./adminLoginForm"
import { useState } from "react"

type WorkProps = {
    id: number
    title: string
    description: string
    image_urls: string[]
    ratings: number[]
}

export default function AddWorkButton() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [password, setPassword] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)

    const closeModal = () => setIsModalOpen(false)
    const openModal = () => setIsModalOpen(true)

    const handlePasswordSubmit = (e: any) => {
        e.preventDefault()
        const pass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD
        if (pass === password) {
            setIsLoggedIn(true)
        } else {
            alert("Incorrect password, please try again")
            setPassword("")
        }
    }

    return (
        <div className=" my-container">
            <Button onClick={openModal}>
                <HiPlus />
                Add Work
            </Button>

            <Modal title="Add Work Form" isModalOpen={isModalOpen} closeModal={closeModal}>
                <CreateWorkForm closeModal={closeModal} />
            </Modal>

            {/* {true ? (
                <Modal title="Add Work Form" isModalOpen={isModalOpen} closeModal={closeModal}>
                    <CreateWorkForm closeModal={closeModal} />
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
            )} */}
        </div>
    )
}
