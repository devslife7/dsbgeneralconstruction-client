import { prisma } from "../db"

export async function deleteReview(reviewId: number) {
    "use server"
    const deleted = await prisma.review.delete({
        where: {
            id: reviewId,
        },
    })

    const workId = deleted.workId
    const rating = await prisma.review.aggregate({ _avg: { rating: true }, where: { workId } })
    await prisma.work.update({
        where: { id: workId },
        data: { rating: rating._avg.rating },
    })
    return deleted
}

export async function createReview(data: any, workId: number) {
    "use server"
    const created = await prisma.review.create({
        data: {
            ...data,
            workId: workId,
        },
    })

    const rating = await prisma.review.aggregate({ _avg: { rating: true }, where: { workId } })
    await prisma.work.update({
        where: { id: workId },
        data: { rating: rating._avg.rating },
    })

    return created
}
