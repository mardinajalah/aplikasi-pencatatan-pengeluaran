import express from "express"
import BelanjaController from "../controllers/belanja"

const router = express()

router.get("/", BelanjaController.getAllBelanja)
router.post("/", BelanjaController.createBelanja)


export default router