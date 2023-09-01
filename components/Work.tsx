type GalleryProp = {
    id: number
    title: string
    description: string
    image_urls: string[]
    ratings: number[]
}

export default function Work({ gallery }: { gallery: GalleryProp[] }) {
    console.log(">>>>gallery", gallery[0].title)
    return (
        <div>
            <div>Work</div>
            <div>{gallery[0].title}</div>
        </div>
    )
}
