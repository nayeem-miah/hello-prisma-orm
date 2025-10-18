import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
async function main() {
    // ? create user
    // const result = await prisma.user.create({
    //     data: {
    //         name: 'Nayeem Miah',
    //         email: 'dev.nayeem@prisma.io',
    //         profilePhoto: "https://profile-photo-dev.nayeem.png"
    //     }
    // })
    // console.log(result);

    // ? find all users
    // const usersData = await prisma.user.findMany()
    // ? find condition users
    // const usersData = await prisma.user.findMany({
    //     where: {
    //         // id: 3,
    //         name: "Nayeem Miah"
    //     }
    // })
    // console.log(usersData);

    // ? findBy id deya find
    // const findById = await prisma.user.findUnique({
    //     where: {
    //         id: 2
    //     }
    // })

    // ? find user if exits otherwise throw error
    // const findUser = await prisma.user.findUniqueOrThrow({
    //     where: {
    //         id: 25
    //     }
    // })
    // console.log(findUser);
}

main()