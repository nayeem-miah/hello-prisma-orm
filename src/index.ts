import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
async function main() {
    const result = await prisma.user.create({
        data: {
            name: 'Nayeem Miah',
            email: 'dev.nayeem@prisma.io',
            profilePhoto: "https://profile-photo-dev.nayeem.png"
        }
    })
    console.log(result);
}

main()