import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt';

export async function POST(req) {
    try {
        const body = await req.json();
        const userData = body.formData;

        if (!userData.name || !userData.username || !userData.password || !userData.confirm_password) {
            return NextResponse.json({message: 'All fields are required'}, {status: 400});
        }

        const duplicate = await prisma.user.findUnique({
            where: { 
                username: userData.username 
            },
        });

        if (duplicate) {
            return NextResponse.json({message: 'Username alread in use'}, {status: 409});
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10);
        
        const newUser = await prisma.user.create({
            data: {
                name: userData.name,
                username: userData.username,
                password: hashedPassword,
            }
        });

        return NextResponse.json({ message: 'Created Successfully' }, { status: 201 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'Oops! Something went wrong!'}, {status: 500})
    }
}