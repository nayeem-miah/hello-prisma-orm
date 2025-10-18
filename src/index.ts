import { PrismaClient } from "@prisma/client";
console.log(process.env.DATABASE_URL)


const prisma = new PrismaClient()
async function main() {
    const result = await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
        }
    })
    console.log(result);
}

main()