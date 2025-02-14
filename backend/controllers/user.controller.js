import { createUser, getUserByEmail } from "../services/user.service.js"

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