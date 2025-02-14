import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()

const DB_NAME = process.env.DB_NAME || "lms"
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_PORT = Number(process.env.DB_PORT) || 5432

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    logging: false
})

// Function to test the connection
export const testConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log("Connection has been established successfully.")
    } catch(err) {
        console.error("Unable to connect to the database:", err)
        process.exit(1)
    }
}