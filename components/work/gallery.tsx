// type GalleryProp = {
//     id: number
//     title: string
//     description: string
//     image_urls: string[]
//     ratings: number[]
// }

import { fetchGallery } from "@/lib/api_calls/getGallery"

export default async function Gallery() {
    const gallery = await fetchGallery()

    return (
        <div>
            <div>work</div>
            <div>{gallery[2].title}</div>
        </div>
    )
}
