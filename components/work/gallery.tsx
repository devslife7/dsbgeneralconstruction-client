import { fetchGallery } from "@/lib/api_calls/getGallery"
import GalleryCard from "./galleryCard"
import AddWorkButton from "./addWorkButton"

export default async function Gallery() {
    const gallery = await fetchGallery()

    // gallery.sort((a: any, b: any) => b.id - a.id)
    return (
        <div>
            <div className="flex flex-wrap justify-center gap-14 lg:justify-start">
                {gallery.map((work: any, index: number) => (
                    <GalleryCard key={index} work={work} />
                ))}
            </div>
            <AddWorkButton />
        </div>
    )
}
