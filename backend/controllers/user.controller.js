import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { createUser, getUserByEmail, verifyCredentials } from "../services/user.service.js"
import { generateAccessToken, generateRefreshToken } from "../utils/authUtils.js"

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET_KEY

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

export const refreshToken = async (req, res) => {
    const { token } = req.body
    if (!token) return res.status(401).json({ message: "No se ha enviado un token" })
    
        jwt.verify(
            token, 
            JWT_SECRET, 
            (err, user) => {
                if (err) return res.status(403).json({ message: "Token no válido" })
                const accessToken = generateAccessToken(user)
                return res.status(200).json({ accessToken })
            }
        )
}