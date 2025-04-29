import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodos(userId:number) {
    const res =await prisma.todo.findFirst({
        where:{
            userId
        }
    })
    console.log(res)
    
}
getTodos(8)