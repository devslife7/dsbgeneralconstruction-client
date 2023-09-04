// "use client"
// import { deleteWork } from "@/utils/api_calls"
// import GalleryCard from "./GalleryCard"

type WorkProps = {
    id: number
    title: string
    description: string
    image_urls: string[]
    ratings: number[]
}

export function GalleryItems({ gallery = [] }: { gallery: WorkProps[] }) {
    // const handleWorkDelete = async (work_id: number) => {
    //     await deleteWork(work_id)
    //     const idx = gallery.findIndex((work: any) => work.id === work_id)
    //     const galleryArray = [...gallery.slice(0, idx), ...gallery.slice(idx + 1)]
    //     // setGallery(galleryArray)
    // }
    gallery.sort((a: any, b: any) => b.id - a.id)
    return (
        <div className="flex flex-wrap justify-center gap-5 lg:justify-start">
            {/* {gallery.map((work: any, index: number) => (
                // <GalleryCard key={index} work={work} handleWorkDelete={handleWorkDelete} />
                <GalleryCard key={index} work={work} />
            ))} */}
        </div>
    )
}