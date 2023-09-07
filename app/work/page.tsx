import AddWorkButton from "@/components/work/addWorkButton"
import Gallery from "@/components/work/gallery"
import { Suspense } from "react"

export default function page() {
    return (
        <>
            {/* <Suspense fallback={<div>Loading...</div>}>
                <Gallery />
            </Suspense> */}
            <AddWorkButton />
        </>
    )
}
