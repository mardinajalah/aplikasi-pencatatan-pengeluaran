import express from "express"
import UserController from "../controllers/user"

const router = express()


router.post("/signup", UserController.register)
router.post("/login", UserController.login)


export default router