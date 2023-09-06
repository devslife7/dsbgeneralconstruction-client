import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id
    const work = await prisma.work.findUnique({ where: { id: Number(id) } })
    return NextResponse.json(work)
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const id = params.id
    const body = await request.json()
    const work = await prisma.work.update({ where: { id: Number(id) }, data: body })
    return NextResponse.json(work)
}
