import { SlOptionsVertical } from "react-icons/sl"
import { LuEdit3 } from "react-icons/lu"
import { BiSolidTrashAlt } from "react-icons/bi"
import { deleteWork } from "@/lib/api_calls/api_calls"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export default function OptionButtons({ workId }: { workId: number }) {
    const router = useRouter()
    const handleWorkDelete = async () => {
        await deleteWork(workId)
        router.refresh()
    }
    return (
        <div className="flex items-center border-t opacity-50 border-black/40">
            <div className="w-1/2 py-2 text-xs text-center">reviews</div>
            <div className="w-1/2 py-2 text-xs text-center border-l border-black/40">gallery</div>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex justify-center w-1/6 py-2 text-xs border-l border-black/40">
                    <SlOptionsVertical className="w-auto text-base" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <LuEdit3 className="mr-4 text-base text-green-500" />
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleWorkDelete}>
                        <BiSolidTrashAlt className="mr-4 text-red-500" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
