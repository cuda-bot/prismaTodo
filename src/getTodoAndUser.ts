import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function getTodosAndUserDetails(userId: number, ) {
//     const user =await prisma.user.findUnique({
//         where:{
//             id:userId
//         }
//     })
//     const todo =await prisma.todo.findMany({
//         where:{
//             userId:userId
//         }
//     })
//     console.log(user)
//     console.log(todo)


// }

async function getTodosAndUserDetails(userId: number, ) {
 const todo =await prisma.todo.findMany({
    where:{
        userId:userId
    },
    select:{
        user:true,
        tittle:true,
        description:true
    }
 })
 console.log(todo)
}

getTodosAndUserDetails(8);