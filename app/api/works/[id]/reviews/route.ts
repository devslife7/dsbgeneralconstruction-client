import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const work = await prisma.work.findUnique({ where: { id: Number(params.id) } })
    if (!work) {
        return NextResponse.json("No work with provided was found.", { status: 400 })
    }
    const reviews = await prisma.review.findMany({ where: { workId: Number(params.id) } })
    return NextResponse.json(reviews)
}

export async function POST(request: Request, { params }: { params: { id: string } }) {
    const json = await request.json()
    const workId = Number(params.id)

    const work = await prisma.work.findUnique({ where: { id: workId } })
    if (!work) return NextResponse.json("No work with provided was found.", { status: 400 })

    const review = await prisma.review.create({
        data: {
            ...json,
            workId: workId,
        },
    })

    const rating = await prisma.review.aggregate({ _avg: { rating: true }, where: { workId } })
    await prisma.work.update({
        where: { id: workId },
        data: { rating: rating._avg.rating },
    })

    return NextResponse.json(review)
}
