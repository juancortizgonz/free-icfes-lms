import bcrypt from "bcryptjs"
import User from "../models/user.model.js"
import { encryptPassword, comparePasswords } from "../utils/authUtils.js"

export const createUser = async (userData) => {
    const hashedPassword = encryptPassword(userData.password)
    const user = await User.create({
        ...userData,
        password: hashedPassword
    })
    return user
}

export const verifyCredentials = async (email, password) => {
    const user = await getUserByEmail(email)
    if (!user) {
        throw new Error("El usuario no existe en la base de datos")
    }

    const isPasswordValid = comparePasswords(password, user.password)
    if (!isPasswordValid) {
        throw new Error("La contraseña es incorrecta")
    }

    return user
}

export const getUserByEmail = async (email) => {
    const user = await User.findOne({ where: { email } })
    return user
}