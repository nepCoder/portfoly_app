import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    let data = {};
    try {
        const post = await prisma.posts.findFirst()
        data = { data: post };
    } catch (e) {
        data = { error: "An unexpected error occurred!" };
    } finally {
        await prisma.$disconnect()
    }

    return new Response(JSON.stringify(data));
}
