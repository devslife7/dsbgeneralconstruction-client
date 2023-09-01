// import axios from "axios"
const serverURL = process.env.NEXT_PUBLIC_SERVER_URL
const worksURL = serverURL + "/works/"

type GalleryProp = {
    id: number
    title: string
    description: string
    image_urls: string[]
    ratings: number[]
}

// export const fetchGallery = async () => await axios.get(worksURL)
export async function fetchGallery() {
    const res = await fetch(worksURL)
    const gallery: GalleryProp[] = await res.json()

    await new Promise(resolve => setTimeout(resolve, 2000))

    return gallery
}
