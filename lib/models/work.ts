"use server"
import { prisma } from "../db"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function listWorks() {
  return await prisma.work.findMany({
    orderBy: {
      id: "desc",
    },
    include: {
      Review: true,
    },
  })
}
export async function deleteWork(workId: number) {
  return await prisma.work.delete({
    where: {
      id: workId,
    },
  })
}

export async function createWork(data: any) {
  return await prisma.work.create({
    data: {
      ...data,
    },
  })
}

export async function createWorkWithMedia(title: string, description: string, media: string[]) {
  const newWork = await prisma.work.create({
    data: {
      title,
      description,
      media,
    },
  })

  revalidatePath("/work")
  //   redirect("/work")

  return newWork
}
