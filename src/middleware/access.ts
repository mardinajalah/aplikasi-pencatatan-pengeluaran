import { Response, Request, NextFunction } from "express"
import jwt from "jsonwebtoken"


interface UserDataType {
    id: number
    nama: string
    email: string
}

interface validationRequest extends Request {
    userData: UserDataType
}

const accessValidation = (req: Request, res: Response, next: NextFunction) => {
    const validationReq = req as validationRequest
    const { authorization } = validationReq.headers

    if (!authorization) {
        res.status(400).json({
            message: 'token di perlukan'
        })
        return
    }

    const token = authorization.split(' ')[1]
    const secret = process.env.JWT_SECRET!

    try {
        const jwtDecode = jwt.verify(token, secret)

        if (typeof jwtDecode !== 'string') {
            validationReq.userData = jwtDecode as UserDataType
        }
    } catch {
        res.status(400).json({
            message: "unauthorized"
        })
        return
    }

    next()
}

export default accessValidation