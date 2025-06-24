import prisma from "../config/prisma"


interface NewDataType {
    nama: string
    harga: number
    jumlah: string
}

const getAllDataBelanja = async () => {
    return await prisma.belanja.findMany()
}

const createDataBelanja = async (newData: NewDataType) => {
    return await prisma.belanja.create({
        data: newData
    })
}

export default { getAllDataBelanja, createDataBelanja }