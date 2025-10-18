import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
async function main() {
    // ? create user
    // const result = await prisma.user.create({
    //     data: {
    //         name: 'Rakib Miah',
    //         email: 'dev.rakib@prisma.io',
    //     }
    // })
    // console.log(result);

    // ? find all users
    // const usersData = await prisma.user.findMany()

    // ? find condition users
    // const usersData = await prisma.user.findMany(
    //     // {
    //     //     where: {
    //     //         // id: 3,
    //     //         name: "Nayeem Miah"
    //     //     }
    //     // }
    // )
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

    // ? update users
    // const updatedData = await prisma.user.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         email: "dev01@gmail.com"
    //     }
    // })
    // console.log(updatedData);

    // ? update many users
    // const updateProfile = await prisma.user.updateMany({
    //     where: {
    //         profilePhoto: "https://dev-default.png"
    //     },
    //     data: {
    //         profilePhoto: null
    //     }
    // })
    // console.log(updateProfile);

    // ? update many users and return data
    //     const updateProfileAndReturn = await prisma.user.updateManyAndReturn({
    //         where: {
    //             profilePhoto: null
    //         },
    //         data: {
    //             profilePhoto: "https://dev-default.png"
    //         }
    //     })
    //     console.log(updateProfileAndReturn);


    // ? delete operation
    // const deleteSingleUser = await prisma.user.delete({
    //     where: {
    //         id: 1
    //     }
    // })
    // console.log(deleteSingleUser);

    // ! delete condition where id getter then 2
    // const deleteMany = await prisma.user.deleteMany({
    //     where: {
    //         id: {
    //             lt: 3
    //         }
    //     }
    // })
    // console.log(deleteMany);


}



main()