import bcrypt from "bcryptjs"
import User from "../models/user.model.js"

export const createUser = async (userData) => {
    // Encrypt the password with default salt rounds
    const hashedPassword = bcrypt.hashSync(userData.password)
    const user = await User.create({
        ...userData,
        password: hashedPassword
    })
    return user
}

export const getUserByEmail = async (email) => {
    const user = await User.findOne({ where: { email } })
    return user
}