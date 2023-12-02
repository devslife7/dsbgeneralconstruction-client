"use server"
import { prisma } from "../lib/db"
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
  for (const file of work.media) {
    const deleteObjectCommand = new DeleteObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: file.split("/").pop()!,
    })
    await s3.send(deleteObjectCommand)
  }

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
  await prisma.work.create({
    data: {
      title,
      description,
      media,
    },
  })

  revalidatePath("/work")
}

export async function createWorkWithMediaComplete(formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const media = formData.getAll("media") as string[]

  // upload media to s3

  await uploadFilesToS3(media)

  try {
    let urlArray: string[] | undefined = []
    // Upload file to S3
    if (fileList.length > 0 && fileList[0]) {
      setStatusMessage("uploading files")

      for (const file of fileList) {
        const checksum = await computeSHA256(file)
        const signedURLResult = await getSignedURL(file.type, file.size, checksum)

        if (signedURLResult.error !== undefined) {
          setStatusMessage(signedURLResult.error)
          console.error(signedURLResult.error)
          return
        }

        const url = signedURLResult.success.url
        urlArray.push(url.split("?")[0])

        await fetch(url, {
          method: "PUT",
          body: file,
          headers: {
            "Content-Type": file.type,
          },
        })
      }
    }

    await prisma.work.create({
      data: {
        title,
        description,
        media,
      },
    })

    revalidatePath("/work")

    // Save work to database
    // await createWorkWithMedia(content, content, urlArray)
    // router.refresh()
  } catch (e) {
    // setStatusMessage("error")
    // console.error(e)
    return
  }
}

const uploadFilesToS3 = async (formData: FormData) => {}

// Takes an input and produces a fixed-size string of bytes. Output is unique to the input.
const computeSHA256 = async (file: File) => {
  const buffer = await file.arrayBuffer()
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("")
  return hashHex
}
