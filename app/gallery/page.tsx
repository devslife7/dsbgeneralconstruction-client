type GalleryProp = {
    id: number
    title: string
    description: string
    image_urls: string[]
    ratings: number[]
}

import Work from "../../components/Work"

export default async function page() {
    const res = await fetch("https://dsbgeneralconstruction-api-production.up.railway.app/works")
    const gallery: GalleryProp[] = await res.json()
    return (
        <div className="container flex items-center justify-center h-screen px-4 mx-auto lg:px-8">
            <div className="text-5xl">page</div>
            <Work gallery={gallery} />
        </div>
    )
}
