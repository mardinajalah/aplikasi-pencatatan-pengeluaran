import { Request, Response } from "express"
import BelanjaModel from "../models/belanja"

const getAllBelanja = async (req: Request, res: Response) => {
    try {
        const result = await BelanjaModel.getAllDataBelanja()
        res.status(200).json({
            message: "data berhasil di tampilan",
            data: result
        })
    } catch {
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


export default { getAllBelanja, createBelanja }