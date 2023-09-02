import AddWorkButton from "@/components/work/addWorkButton"
import Gallery from "@/components/work/gallery"
import { Suspense } from "react"

export default function page() {
    return (
        <div className="">
            <Suspense fallback={<div>Loading...</div>}>
                <Gallery />
            </Suspense>
            <AddWorkButton />
        </div>
    )
}
