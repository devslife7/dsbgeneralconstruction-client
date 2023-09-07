import { prisma } from "../db"

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
