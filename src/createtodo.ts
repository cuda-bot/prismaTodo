import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createTodo(userId:number ,tittle:string,description:string) {
    const res=await prisma.todo.create({
        data:{
            userId,
            tittle,
            description
        }
    })
    console.log(res)
    
}
// createTodo(1,"go to gym","got to gym and do 10 pushups");
createTodo(8,"go to parlor","got to parlor cut hair");