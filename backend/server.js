import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js"

dotenv.config()

const app = express()

// Middleware
app.use(express.json())

app.use("/api/v1/users", userRoutes)

app.get("/", (req, res) => {
    res.send("Backend is working properly!")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`)
})