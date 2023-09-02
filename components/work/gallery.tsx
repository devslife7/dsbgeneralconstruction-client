import { fetchGallery } from "@/lib/api_calls/getGallery"
import GalleryCard from "./galleryCard"
import AddWorkButton from "./addWorkButton"

export default async function Gallery() {
    const gallery = await fetchGallery()

    gallery.sort((a: any, b: any) => b.id - a.id)
    return (
        <div className="flex flex-wrap justify-center gap-10 mx-auto lg:justify-start lg:container lg:px-8">
            {gallery.map((work: any, index: number) => (
                <GalleryCard key={index} work={work} />
            ))}
        </div>
    )
}
