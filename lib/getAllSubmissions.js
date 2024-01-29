import prisma from "./prisma";

export default async function getAllSubmissions() {
    const submissions = await prisma.submission.findMany({
        where: {adminVisible: true}
    });
    return submissions;
}