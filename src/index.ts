import express from "express"
import dotenv from "dotenv"
import UserRauter from "./routes/users"
import BelanjaRouter from "./routes/belanja"
// import accessValidation from "./middleware/access"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())

app.use("/auth", UserRauter)
app.use("/api", BelanjaRouter)

app.listen(PORT, () => {
    console.log(`server running in http://localhost:${PORT}`)
})