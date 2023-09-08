import AddWorkButton from "@/components/work/addWorkButton"
import Gallery from "@/components/work/gallery"
import { Suspense } from "react"
import { createWork } from "@/lib/models/work"

export default function page() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Gallery />
            </Suspense>
            <AddWorkButton createWork={createWork} />
        </>
    )
}
