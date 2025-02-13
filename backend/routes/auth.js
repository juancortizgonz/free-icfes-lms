import express from "express"
import bcrypt from "bcrypt"
import { pool } from "../config/db"

const router = express.Router()

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body

    try {
        const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email])
        if (userExists.rows.length > 0) {
            return res.status(400).json({ message: "El usuario ya existe en la base de datos." })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await pool.query(
            "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
            [name, email, hashedPassword]
        )

        res.status(201).json({ message: "Usuario registrado con éxito." })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Error en el servidor. Intente de nuevo." })
    }
})

export default router