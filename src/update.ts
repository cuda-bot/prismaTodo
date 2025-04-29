import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
interface UpdateParams {
    firstName:string,
    lastName:string
}
async function updateuser(username:string,{firstName,lastName}:UpdateParams) {
    const res =await prisma.user.update({
     where :{email:username},
     data:{
        firstName,
        lastName

     },
     select:{
        id:true
     }
    })
    console.log(res)
    
}
updateuser("architrajput@gmail.com",{
    firstName:'111111',
    lastName:'222222'
})
