import { useState } from "react"
import Button from "../shared/Button"
import { updateWorkFiles, createWork } from "@/utils/api_calls"

type Props = {
  closeModal: () => void
  addToGallery: (work: any) => void
}

// Limiting the file input to 10mb
// const fileSizeLimit = 10_000_000
const FILE_SIZE_LIMIT = 1000

export default function CreateWorkForm({ closeModal, addToGallery }: Props) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [photos, setPhotos] = useState<any[]>([])

  const handleImageUpload = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData()
    photos.forEach(photo => formData.append(`images[]`, photo))
    formData.append("title", title)
    formData.append("description", description)

    if (!!photos.length) {
      const resp = await createWork(formData)
      addToGallery(resp.data.work)
      resetForm()
    } else {
      alert("file input cannot be empty")
    }
    setIsLoading(false)
  }
  const setImagesArray = (e: any) => {
    const imagesArray = Array.prototype.slice.call(e.target.files)
    let photosToUpload = [...photos]
    imagesArray.map((file: any) => {
      if (file.size < FILE_SIZE_LIMIT) {
        photosToUpload.push(file)
      } else {
        alert("file is too big")
        photosToUpload = []
        setPhotos([])
        return
      }
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
    <form>
      <div className="flex flex-col space-y-7">
        <input
          id="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <textarea
          id="description"
          placeholder="Description"
          value={description}
          rows={4}
          onChange={e => setDescription(e.target.value)}
          className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <label className="block">
          <input
            id="fileUpload"
            type="file"
            placeholder="hello"
            multiple
            accept=".png, .jpg, .jpeg, .mp4, .mov"
            onChange={e => setImagesArray(e)}
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-primary hover:file:bg-orange-100"
          />
        </label>
      </div>

      <div className="mt-6 space-x-4">
        <Button onClick={(e: any) => handleImageUpload(e)} type="submit" variant="secondary">
          {isLoading ? "Loading..." : "Submit"}
        </Button>
        <Button onClick={closeModal} variant="danger">
          Cancel
        </Button>
      </div>
    </form>
  )
}
