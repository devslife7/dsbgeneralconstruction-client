import { fetchGallery } from "@/lib/api_calls/getGallery"
import GalleryCard from "./galleryCard/galleryCard"

export default async function Gallery() {
    const gallery = await fetchGallery()

    gallery.sort((a: any, b: any) => b.id - a.id)
    return (
        <div className="mx-auto lg:container lg:px-8">
            <div className="mt-10 text-5xl font-bold opacity-70">Our Work</div>

            <div className="flex flex-wrap justify-center gap-20 my-10 lg:gap-10 lg:justify-start">
                {gallery.map((work: any, index: number) => (
                    <GalleryCard key={index} work={work} />
                ))}
            </div>
        </div>
    )
}
