import { Message } from '@mui/icons-material';
import { PrismaClient, posts } from '@prisma/client'
import { NextApiRequest } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { NextRequest } from 'next/server';

const prisma = new PrismaClient()

export async function GET() {
    let data = {};
    try {
        const post = await prisma.posts.findMany();
        data = { data: post };
    } catch (e) {
        data = { error: "An unexpected error occurred!" };
    } finally {
        await prisma.$disconnect()
    }

    return new Response(JSON.stringify(data));
}

export async function POST(req:NextRequest) {
    const reqJSON = await req.json();
    const params:posts = reqJSON;
    let data = {};
    try {
        if (params.title && params.content) {
            const newPost = await prisma.posts.create({
                data: params,
            });

            data = { success: true, message: 'New post created!', post: newPost }
        }
        console.log(params);
    }
    catch (e) {
        data = { success: false, error: 'An unexpected error occurred!' }
    }
    finally {
        await prisma.$disconnect()
    }

    return new Response(JSON.stringify(data));
}