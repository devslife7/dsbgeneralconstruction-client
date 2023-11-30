"use client"

import { DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { DeleteSVG, EditSVG } from "@/public/svgs"
import { useRouter } from "next/navigation"

type WorkProps = {
  id: number
  title: string
  description: string
  media: string[]
  rating: number
  Review: any[]
}

type Props = {
  work: WorkProps
  deleteWork: (work: any) => void
}

export default function DropdownMenuOptions({ deleteWork, work }: Props) {
  const router = useRouter()

  const handleWorkDelete = async () => {
    await deleteWork(work)
  }
  return (
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
  )
}
