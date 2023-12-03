"use client"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { createWorkWithMediaComplete } from "@/actions/work"
import Image from "next/image"
import Button from "../ui/button"

export default function CreatePostForm() {
  const ref = useRef<HTMLFormElement>(null)
  const router = useRouter()
  const [file, setFile] = useState<File | undefined>(undefined)
  const [fileList, setFileList] = useState<File[]>([])
  const [fileUrl, setFileUrl] = useState<string | undefined>(undefined)

  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setStatusMessage("creating")

    // Image upload whole logic
    // try {
    //   let url: string | undefined = ""
    //   let urlArray: string[] | undefined = []
    //   // Upload file to S3
    //   if (fileList.length > 0 && fileList[0]) {
    //     setStatusMessage("uploading files")

    //     for (const file of fileList) {
    //       const checksum = await computeSHA256(file)
    //       const signedURLResult = await getSignedURL(file.type, file.size, checksum)

    //       if (signedURLResult.error !== undefined) {
    //         setStatusMessage(signedURLResult.error)
    //         console.error(signedURLResult.error)
    //         return
    //       }

    //       const url = signedURLResult.success.url
    //       urlArray.push(url.split("?")[0])

    //       await fetch(url, {
    //         method: "PUT",
    //         body: file,
    //         headers: {
    //           "Content-Type": file.type,
    //         },
    //       })
    //     }
    //   }

    //   // Save work to database
    //   await createWorkWithMedia(content, content, urlArray)
    //   router.refresh()
    // } catch (e) {
    //   setStatusMessage("error")
    //   console.error(e)
    //   return
    // }

    setStatusMessage("created")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    console.log("file: ", file)
    setFile(file)
    setFileList(Array.from(e.target.files || []))

    if (fileUrl) {
      URL.revokeObjectURL(fileUrl)
    }

    if (file) {
      const url = URL.createObjectURL(file)
      setFileUrl(url)
    } else {
      setFileUrl(undefined)
    }
  }

  const submitAction = async (formData: FormData) => {
    setStatusMessage("creating")

    // trigger server action here
    await createWorkWithMediaComplete(formData)

    setStatusMessage("created")
  }

  return (
    <form
      action={submitAction}
      ref={ref}
      className="border border-neutral-500 rounded-lg px-6 py-4 max-w-md m-auto"
    >
      {/* Status message */}
      {statusMessage && (
        <p className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 mb-4 rounded relative">
          {statusMessage}
        </p>
      )}

      {/* Input fields */}
      <div className="flex gap-4 items-start pb-4 w-full">
        <div className="flex flex-col gap-6 w-full">
          <label className="text-center text-xl"> Create Work Post</label>
          <label className="w-full">
            <input
              className="bg-transparent flex-1 w-full border-none outline-none text-xl"
              type="text"
              name="title"
              placeholder="Title"
            />
          </label>
          <label className="w-full">
            <input
              className="bg-transparent flex-1 w-full border-none outline-none"
              type="text"
              name="description"
              placeholder="Description"
            />
          </label>

          {fileUrl && file ? previewFile(file, fileUrl) : null}

          {fileInput(handleChange)}
        </div>
      </div>

      <div className="flex justify-between items-center mt-5">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}

// Preview first file in array of selected items
const previewFile = (file: File, fileUrl: string) => {
  console.log("previewFile:", file, fileUrl)
  return (
    <div className="flex gap-4 items-start pb-4 w-full">
      {file.type.startsWith("image/") ? (
        <div className="rounded-lg h-32 w-32 overflow-hidden relative">
          <Image className="object-cover" src={fileUrl} alt="preview" priority={true} fill={true} />
        </div>
      ) : (
        <div className="rounded-lg overflow-hidden w-200 h-300 relative">
          <video className="object-cover" src={fileUrl} autoPlay loop muted />
        </div>
      )}
    </div>
  )
}

// File input field
const fileInput = (handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void) => {
  return (
    <label className="flex">
      <svg
        className="w-8 h-8 hover:cursor-pointer transform-gpu active:scale-75 transition-all text-neutral-500"
        aria-label="Attach media"
        role="img"
        viewBox="0 0 20 20"
      >
        <title>Attach media</title>
        <path
          d="M13.9455 9.0196L8.49626 14.4688C7.16326 15.8091 5.38347 15.692 4.23357 14.5347C3.07634 13.3922 2.9738 11.6197 4.30681 10.2794L11.7995 2.78669C12.5392 2.04694 13.6745 1.85651 14.4289 2.60358C15.1833 3.3653 14.9855 4.4859 14.2458 5.22565L6.83367 12.6524C6.57732 12.9088 6.28435 12.8355 6.10124 12.6671C5.94011 12.4986 5.87419 12.1983 6.12322 11.942L11.2868 6.78571C11.6091 6.45612 11.6164 5.97272 11.3088 5.65778C10.9938 5.35749 10.5031 5.35749 10.1808 5.67975L4.99529 10.8653C4.13835 11.7296 4.1823 13.0626 4.95134 13.8316C5.77898 14.6592 7.03874 14.6446 7.903 13.7803L15.3664 6.32428C16.8678 4.81549 16.8312 2.83063 15.4909 1.4903C14.1799 0.179264 12.1584 0.106021 10.6496 1.60749L3.10564 9.16608C1.16472 11.1143 1.27458 13.9268 3.06169 15.7139C4.8488 17.4937 7.6613 17.6109 9.60955 15.6773L15.1027 10.1841C15.4103 9.87653 15.4103 9.30524 15.0881 9.00495C14.7878 8.68268 14.2677 8.70465 13.9455 9.0196Z"
          className="fill-current"
        ></path>
      </svg>
      {/* <AttachMediaSVG /> */}
      <input
        className="bg-transparent flex-1 border-none outline-none hidden"
        name="media"
        type="file"
        multiple
        accept="image/jpeg,image/jpg,image/png,image/webp,image/gif,video/mp4,video/webm,video/mov"
        onChange={handleChange}
      />
    </label>
  )
}
