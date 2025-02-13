const express = require("express")
const app = express()
const dotenv = require("dotenv")

// Load env variables
dotenv.config()

app.get("/", (req, res) => {
    res.send("Backend is working properly!")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})