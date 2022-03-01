//traemos todas las variables de entorno
const config = {
    appCofig:{
        port: process.env.APP_PORT
    },
    dbConfig:{
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dbName: process.env.DB_NAME
    }
}

module.exports = config