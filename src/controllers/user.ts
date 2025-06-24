import { Request, Response } from "express"
import UserModel from "../models/user"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const register = async (req: Request, res: Response) => {
    const { nama, email, password, confermPassword } = req.body

    if (password !== confermPassword) {
        res.status(400).json({
            message: "konfirmasi password salah"
        })
        return
    }

    try {
        const hashPassword = await bcrypt.hash(password, 10)
        const newData = { nama, email, password: hashPassword }
        const result = await UserModel.createDataUser(newData)

        res.status(201).json({
            message: "Registrasi berhasil",
            data: result
        });
    } catch {
        res.status(400).json({
            message: "email sudah ada"
        })
    }

}

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
        const result = await UserModel.getDataUserByEmail(email)

        if (!result) {
            res.status(400).json({
                message: "email tidak di temukan"
            })
            return
        }

        const isPasswordValid = await bcrypt.compare(password, result.password)

        if (!isPasswordValid) {
            res.status(400).json({
                message: "Password salah"
            });
            return
        }

        const payload = {
            id: result.id,
            nama: result.nama,
            email: result.email
        }

        const secret = process.env.JWT_SECRET!
        const expiresIn = 60 * 60 * 1
        const token = jwt.sign(payload, secret, { expiresIn })

        res.status(200).json({
            message: "login berhasil",
            data: {
                id: result.id,
                nama: result.nama,
                email: result.email
            },
            token
        });
    } catch {

        res.status(500).json({
            message: "server error"
        });
    }
}

export default { register, login }