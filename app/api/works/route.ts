import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET(request: Request) {
    const works = await prisma.work.findMany({ include: { Review: true } })
    return NextResponse.json(works)
}

export async function POST(request: Request) {
    const body = await request.json()
    const work = await prisma.work.create({ data: body })
    return NextResponse.json(work)
}
