import { sequelize } from "./db.js"
import User from "../models/user.model.js"

const syncDB = async () => {
    try {
        await sequelize.sync({ force: false })
        console.log(`Los modelos se sincronizaron con la BD correctamente`)
    } catch(err) {
        console.error(`Se produjo un error al intentar sincronizar los modelos con la BD: ${err}`)
    }
}

syncDB()