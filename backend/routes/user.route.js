import express from "express"
import { registerUser } from "../controllers/user.controller.js"
import { check } from "express-validator"

const userRoutes = express.Router()

// Route to create a new user
userRoutes.post(
    "/register", 
    [
        // Input validations
        check("name", "El nombre es obligatorio").not().isEmpty(),
        check("email", "El email es obligatorio").not().isEmpty(),
        check("password", "La contraseña es obligatoria").not().isEmpty()
    ], 
    registerUser
)

export default userRoutes