import { useState } from "react"
import Button from "../shared/Button"
import { fetchGallery, updateWorkFiles, createWork, deleteWork } from "@/utils/api_calls"

export default function CreateWorkForm({
  closeModal,
  addToGallery,
}: {
  closeModal: () => void
  addToGallery: (work: any) => void
}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [photos, setPhotos] = useState<any[]>([])

  const handleImageUpload = async () => {
    setIsLoading(true)
    const formData = new FormData()
    photos.forEach(photo => formData.append(`images[]`, photo))

    if (!!photos) {
      const workResponse = await createWork(title, description)
      const work_id = workResponse.data.work.id

      const updateWorkResponse = await updateWorkFiles(work_id, formData)
      const newWork = updateWorkResponse.data.work

      addToGallery(newWork)
    }
    setIsLoading(false)
    resetForm()
  }
  const setImagesArray = (e: any) => {
    const imagesArray = Array.prototype.slice.call(e.target.files)
    const photosToUpload = [...photos]
    imagesArray.some((images: any) => {
      photosToUpload.push(images)
    })
    setPhotos(photosToUpload)
  }

  const resetForm = () => {
    setTitle("")
    setDescription("")
    setPhotos([])
    closeModal()
  }

  return (
    <div>
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

      <div className="mt-6 space-x-4">
        <Button onClick={handleImageUpload} variant="secondary">
          {isLoading ? "Loading..." : "Submit"}
        </Button>
        <Button onClick={closeModal} variant="danger">
          Cancel
        </Button>
      </div>
    </div>
  )
}
