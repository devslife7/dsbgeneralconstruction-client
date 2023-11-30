"use server"
import { prisma } from "../db"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3"

const s3 = new S3Client({
  region: process.env.AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_BUCKET_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_BUCKET_SECRET_ACCESS_KEY!,
  },
})

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
export async function deleteWork(work: any) {
  // delete from s3
  const deleteObjectCommand = new DeleteObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: work.media[0].split("/").pop()!,
  })
  await s3.send(deleteObjectCommand)

  await prisma.work.delete({
    where: {
      id: work.id,
    },
  })

  revalidatePath("/work")
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

  //   revalidatePath("/work")
  //   redirect("/work")

  return newWork
}
