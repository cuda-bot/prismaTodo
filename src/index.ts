import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function insertUser(email:string , password :string,firstName:string,lastName :string) {
    const res =await prisma.user.create({
        data:{
            email,
            password,
            firstName,
            lastName
        },
        select:{
            id:true,
            password:true
        }
    })
    console.log(res);
}
// insertUser("architrajput@gmail.com","password","archit","rajput")
// insertUser("architrajput1@gmail.com","password","archit1","rajput")
// insertUser("architrajput2@gmail.com","password","archit2","rajput")
insertUser("architrajput141@gmail.com","password111","archit2111","rajput11111")