import { fetchGallery } from "@/lib/api_calls/getGallery"
import GalleryCard from "./galleryCard"
import { deleteWork } from "@/lib/api_calls/api_calls"

export default async function Gallery() {
    const gallery = await fetchGallery()

    // const handleWorkDelete = async (work_id: number) => {
    //     "use server"
    //     await deleteWork(work_id)
    //     const idx = gallery.findIndex((work: any) => work.id === work_id)
    //     const galleryArray = [...gallery.slice(0, idx), ...gallery.slice(idx + 1)]
    //     // setGallery(galleryArray)
    // }
    //     gallery.sort((a: any, b: any) => b.id - a.id)

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-5 lg:justify-start">
                {gallery.map((work: any, index: number) => (
                    // <GalleryCard key={index} work={work} handleWorkDelete={handleWorkDelete} />
                    <GalleryCard key={index} work={work} />
                ))}
            </div>
        </div>
    )
}

// export function GalleryItems({ gallery = [] }: { gallery: WorkProps[] }) {
//     // const handleWorkDelete = async (work_id: number) => {
//     //     await deleteWork(work_id)
//     //     const idx = gallery.findIndex((work: any) => work.id === work_id)
//     //     const galleryArray = [...gallery.slice(0, idx), ...gallery.slice(idx + 1)]
//     //     // setGallery(galleryArray)
//     // }
//     gallery.sort((a: any, b: any) => b.id - a.id)
//     return (
//         <div className="flex flex-wrap justify-center gap-5 lg:justify-start">
//             {/* {gallery.map((work: any, index: number) => (
//                 // <GalleryCard key={index} work={work} handleWorkDelete={handleWorkDelete} />
//                 <GalleryCard key={index} work={work} />
//             ))} */}
//         </div>
//     )
// }
