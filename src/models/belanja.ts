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

const updateDataBelanja = async (idBelanja: number, newData: NewDataType) => {
    return await prisma.belanja.update({
        where: { id: idBelanja },
        data: newData
    })
}

const deleteDataBelanja = async (idBelanja: number) => {
    return await prisma.belanja.delete({
        where: { id: idBelanja }
    })
}

export default { getAllDataBelanja, createDataBelanja, updateDataBelanja, deleteDataBelanja }