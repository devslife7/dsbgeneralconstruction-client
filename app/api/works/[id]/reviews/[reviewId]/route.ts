import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function PATCH(request: Request, { params }: { params: { id: string; reviewId: string } }) {
    const json = await request.json()
    const workId = Number(params.id)
    const reviewId = Number(params.reviewId)

    // Responds with 400 if no review with provided id was found
    const reviewToUpdate = await prisma.review.findUnique({ where: { id: reviewId } })
    if (!reviewToUpdate) return NextResponse.json("No review with provided id was found.", { status: 400 })

    // Responds with 400 if no work with provided id was found
    const work = await prisma.work.findUnique({ where: { id: workId } })
    if (!work) return NextResponse.json("No work with provided id was found.", { status: 400 })

    const review = await prisma.review.update({
        where: { id: reviewId },
        data: { ...json },
    })

    // Recalculates the rating of the work
    const rating = await prisma.review.aggregate({ _avg: { rating: true }, where: { workId } })
    await prisma.work.update({
        where: { id: workId },
        data: { rating: rating._avg.rating },
    })

    return NextResponse.json(review)
}

export async function DELETE(request: Request, { params }: { params: { id: string; reviewId: string } }) {
    const workId = Number(params.id)
    const reviewId = Number(params.reviewId)

    // Responds with 400 if no review with provided id was found
    const reviewToDelete = await prisma.review.findUnique({ where: { id: reviewId } })
    if (!reviewToDelete) return NextResponse.json("No review with provided id was found.", { status: 400 })

    // Responds with 400 if no work with provided id was found
    const work = await prisma.work.findUnique({ where: { id: workId } })
    if (!work) return NextResponse.json("No work with provided id was found.", { status: 400 })

    const review = await prisma.review.delete({
        where: { id: reviewId },
    })

    // Recalculates the rating of the work
    const rating = await prisma.review.aggregate({ _avg: { rating: true }, where: { workId } })
    await prisma.work.update({
        where: { id: workId },
        data: { rating: rating._avg.rating },
    })

    return NextResponse.json(review)
}
