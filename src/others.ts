import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function others() {
    // * create sone data / insert some data
    //     const insertUsers = await prisma.user.createMany({
    //         data: [
    //             {
    //                 name: "Mir",
    //                 email: "mir@gmail.com"
    //             },
    //             {
    //                 name: "Redux",
    //                 email: "reddux@gmail.com"
    //             },
    //             {
    //                 name: "mongoose",
    //                 email: "mongoose@gmail.com"
    //             },
    //             {
    //                 name: "Mongodb",
    //                 email: "mongodb@gmail.com"
    //             },
    //             {
    //                 name: "Zeco",
    //                 email: "xeco@gmail.com"
    //             },
    //             {
    //                 name: "right join",
    //                 email: "right.join@gmail.com"
    //             },
    //             {
    //                 name: "left join",
    //                 email: "left.join@gmail.com"
    //             },
    //             {
    //                 name: "join",
    //                 email: "jin@gmail.com"
    //             },
    //             {
    //                 name: "select",
    //                 email: "select@gmail.com"
    //             },
    //             {
    //                 name: "Where",
    //                 email: "where@gmail.com"
    //             },
    //             {
    //                 name: "XZir",
    //                 email: "zid@gmail.com"
    //             },

    //         ]
    //     })
    //     console.log(insertUsers);

    // * retrieve all data
    const allUsers = await prisma.user.findMany({
        where: {
            name: {
                contains: "mi", //* case sensitive,
                mode: "insensitive"
            }
        },
        orderBy: {
            id: "desc",
        }
    });
    console.log(allUsers)
}

others()