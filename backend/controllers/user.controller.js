import { createUser, getUserByEmail, verifyCredentials } from "../services/user.service.js"
import { generateAccessToken, generateRefreshToken } from "../utils/authUtils.js"

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" })
        }

        const existingUser = await getUserByEmail(email)
        if (existingUser) {
            return res.status(400).json({ message: "El email ya se encuentra registrado" })
        }

        const newUser = await createUser({ name, email, password })
        return res.status(201).json(newUser)
    } catch(err) {
        return res.status(500).json({ message: err.message })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(400).json({ message: "Todos los campos son obligatorios" })
        }

        const user = await verifyCredentials(email, password)
        const accessToken = generateAccessToken(user)
        const refreshToken = generateRefreshToken(user)

        return res.status(200).json({ accessToken, refreshToken })
    } catch(err) {
        return res.status(401).json({ message: err.message })
    }
}