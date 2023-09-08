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
export async function deleteWork(workId: number) {
    "use server"
    return await prisma.work.delete({
        where: {
            id: workId,
        },
    })
}

export async function createWork(data: any) {
    "use server"
    return await prisma.work.create({
        data: {
            ...data,
        },
    })
}
