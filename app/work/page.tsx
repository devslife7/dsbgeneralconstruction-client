import Gallery from "@/components/work/gallery"
import { Suspense } from "react"

export default function page() {
    return (
        <div className="container flex items-center justify-center h-screen px-4 mx-auto lg:px-8">
            <Suspense fallback={<div>Loading...</div>}>
                <Gallery />
            </Suspense>
        </div>
    )
}
