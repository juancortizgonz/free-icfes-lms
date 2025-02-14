import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

// Middleware
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Backend is working properly!")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`)
})