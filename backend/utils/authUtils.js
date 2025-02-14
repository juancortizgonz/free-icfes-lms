import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET_KEY
const ACCESS_TOKEN_EXPIRATION = process.env.ACCESS_TOKEN_EXPIRATION
const REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION

export const encryptPassword = password => {
    return bcrypt.hashSync(password) // Default salt rounds is 10
}

export const comparePasswords = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword)
}

export const generateAccessToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email }, 
        JWT_SECRET, 
        { expiresIn: ACCESS_TOKEN_EXPIRATION }
    )
}

export const generateRefreshToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email }, 
        JWT_SECRET, 
        { expiresIn: REFRESH_TOKEN_EXPIRATION }
    )
}