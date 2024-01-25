import prisma from "./prisma";

export default async function getUserSubmissions(userId) {
    const submissions = await prisma.submission.findMany({
        where: {authorVisible: true, authorId: userId}
    });
    return submissions;
};