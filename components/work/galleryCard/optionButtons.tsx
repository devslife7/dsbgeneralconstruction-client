"use client"
import { DeleteSVG, GallerySVG, ReviewsSVG, OptionsSVG, EditSVG } from "@/public/svgs"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import MediaGalleryButton from "./mediaGalleryButton"
import Reviews from "./reviews"
import { deleteWork } from "@/lib/api_calls/works"

type WorkProps = {
    id: number
    title: string
    description: string
    image_urls: string[]
    rating: number
    Review: any[]
}

export default function OptionButtons({ work }: { work: WorkProps }) {
    const router = useRouter()
    const handleWorkDelete = async () => {
        await deleteWork(work.id)
        router.refresh()
    }

    return (
        <div className="flex items-center border-t border-black/30">
            <Dialog>
                <DialogTrigger className="flex items-center justify-center w-1/2 gap-2 py-2 text-xs text-center border-r border-black/30">
                    <ReviewsSVG className="text-sm mt-[.1rem] text-primary" />
                    <div className="opacity-70">reviews</div>
                </DialogTrigger>
                <Reviews work={work} />
            </Dialog>
            <div className="w-1/2 h-8 relative overflow-hidden cursor-pointer">
                <MediaGalleryButton mediaURLS={work.image_urls} className="z-10 opacity-0 relative" />
                <div className="absolute top-0 left-0 flex items-center justify-center text-xs gap-1  w-full h-full text-center">
                    <GallerySVG className="text-base text-primary" />
                    <div className="opacity-70">gallery</div>
                </div>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex justify-center w-1/6 py-2 text-xs border-l border-black/40">
                    <OptionsSVG className="w-auto text-base opacity-70" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="text-gray-600">
                    <DropdownMenuItem>
                        <EditSVG className="mr-4 text-base text-green-500" />
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleWorkDelete}>
                        <DeleteSVG className="mr-4 text-red-500" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
