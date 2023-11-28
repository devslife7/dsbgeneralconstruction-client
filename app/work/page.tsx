import AddWorkButton from "@/components/work/addWorkButton"
import { Suspense } from "react"
import { createWork } from "@/lib/models/work"
import Gallery from "@/components/work/gallery"
import CreatePostForm from "@/components/work/CreatePostForm"

export default function page() {
  const testUser = {}
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Gallery />
      </Suspense> */}
      {/* <AddWorkButton createWork={createWork} /> */}
      <CreatePostForm user={testUser} />
    </>
  )
}
