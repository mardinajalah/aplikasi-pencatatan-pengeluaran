import prisma from "../config/prisma";


interface NewDataType {
    nama: string
    email: string
    password: string
}


const createDataUser = async (newData: NewDataType) => {
    return await prisma.user.create({
        data: newData
    })
}

const getDataUserByEmail = async ( email: string ) => {
    return await prisma.user.findUnique({
        where: { email }
    })
}

export default { createDataUser, getDataUserByEmail }