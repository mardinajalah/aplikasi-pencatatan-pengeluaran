import express from "express"
import BelanjaController from "../controllers/belanja"

const router = express()

router.get("/", BelanjaController.getAllBelanja)
router.post("/", BelanjaController.createBelanja)
router.patch("/:id", BelanjaController.updateBelanja)
router.delete("/:id", BelanjaController.deleteBelanja)


export default router