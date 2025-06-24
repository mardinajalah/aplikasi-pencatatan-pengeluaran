import { Request, Response } from "express"
import BelanjaModel from "../models/belanja"

const getAllBelanja = async (req: Request, res: Response) => {
    try {
        const result = await BelanjaModel.getAllDataBelanja()
        res.status(200).json({
            message: "data berhasil di tampilan",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            message: "server error"
        })
    }
}

const createBelanja = async (req: Request, res: Response) => {
    const newData = req.body

    try {
        const result = await BelanjaModel.createDataBelanja(newData)
        res.status(200).json({
            message: "data berhasil di tambahkan",
            data: result
        })
    } catch {
        res.status(500).json({
            message: "data gagal di tambahkan"
        })
    }
}

const updateBelanja = async (req: Request, res: Response) => {
    const { id } = req.params
    const { nama, harga, jumlah } = req.body

    try {
        const idBelanja = Number(id)
        const newData = { nama, harga, jumlah }
        const result = await BelanjaModel.updateDataBelanja(idBelanja, newData)
        res.status(200).json({
            message: "data berhasil di ubah",
            data: result
        })
    } catch {
        res.status(400).json({
            message: "data gagal di ubah",
        })
    }
}

const deleteBelanja = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const idBelanja = Number(id)
        const result = await BelanjaModel.deleteDataBelanja(idBelanja)
        res.status(200).json({
            message: "data berhasil di hapus",
            data: result
        })
    } catch {
        res.status(400).json({
            message: "data gagal di hapus"
        })
    }
}


export default { getAllBelanja, createBelanja, updateBelanja, deleteBelanja }