import { deleteWork } from "@/lib/api_calls/api_calls"
import { DeleteSVG, GallerySVG, ReviewsSVG, OptionsSVG, EditSVG } from "@/public/svgs"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import MediaGalleryButton from "./mediaGalleryButton"

type WorkProps = {
    id: number
    title: string
    description: string
    image_urls: string[]
    ratings: number[]
}

export default function OptionButtons({ work }: { work: WorkProps }) {
    const router = useRouter()
    const handleWorkDelete = async () => {
        await deleteWork(work.id)
        router.refresh()
    }

    // const renderComments = () => {
    //     type Comment = any[]
    //     const cmts: Comment = work.comments

    //     return cmts.map((comment, index) => (
    //         <div key={index}>
    //             <div className="flex gap-2">
    //                 <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
    //                     <span className="text-xl text-white uppercase">{comment.username.charAt(0)}</span>
    //                 </div>
    //                 <div className="text-gray-500 ">
    //                     <span className="font-medium text-gray-800 whitespace-nowrap">
    //                         {comment.username}
    //                     </span>
    //                     <div>{comment.content}</div>
    //                 </div>
    //             </div>
    //             {true && (
    //                 <button className="mt-2 text-red-500" onClick={() => handleCommentDelete(comment.id)}>
    //                     <u>Delete</u>
    //                 </button>
    //             )}
    //         </div>
    //     ))
    // }

    return (
        <div className="flex items-center border-t border-black/30">
            <Dialog>
                <DialogTrigger className="flex items-center justify-center w-1/2 gap-2 py-2 text-xs text-center border-r border-black/30">
                    <ReviewsSVG className="text-sm mt-[.1rem] text-primary" />
                    <div className="opacity-70">reviews</div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Reviews</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account and remove
                            your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <div className="w-1/2 h-8 relative overflow-hidden">
                <MediaGalleryButton transparent mediaURLS={work.image_urls} />
                <div className="absolute top-0 left-0 flex items-center justify-center text-sm gap-1  w-full h-full text-center">
                    <GallerySVG className="text-base text-primary" />
                    <div className="opacity-70">gallery</div>
                </div>
            </div>
            {/* <div className="absolute inset-0 flex items-center bg-pink-400 justify-center gap-2 text-xs text-center border-l-2">
                    <GallerySVG className="text-base text-primary" />
                    <div className="opacity-70">gallery</div>
                </div> */}
            {/* </div> */}
            {/* <DropdownMenu>
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
            </DropdownMenu> */}
        </div>
    )
}
