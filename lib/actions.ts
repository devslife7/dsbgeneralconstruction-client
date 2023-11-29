"use server"
// import { auth } from "@/auth"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"

import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

import crypto from "crypto"
const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString("hex")

const s3 = new S3Client({
  region: process.env.AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_BUCKET_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_BUCKET_SECRET_ACCESS_KEY!,
  },
})

const acceptedTypes = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",
  "video/mp4",
  "video/webm",
]

const maxFileSize = 1024 * 1024 * 10 // 10MB

export async function getSignedURL(type: string, size: number, checksum: string) {
  // make sure user is authenticated
  // const session = await auth()
  const session = true

  if (!session) return { error: "Not authenticated" }
  if (!acceptedTypes.includes(type)) return { error: "File type not accepted" }
  if (size > maxFileSize) return { error: "File size too large" }

  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: generateFileName(),
    ContentType: type,
    ContentLength: size,
    ChecksumSHA256: checksum,
  })

  const signedURL = await getSignedUrl(s3, putObjectCommand, {
    expiresIn: 60,
  })

  return { success: { url: signedURL } }
  // return { success: { url: "signedURL" } }
}
