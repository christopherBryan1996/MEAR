require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./db/mongodb')
const {appCofig, dbConfig} = require('./config')

async function initApp(appCofig, dbConfig){
    try {
        await connectDB(dbConfig)
        app.listen(appCofig.port, () => console.log(`listen on: http://localhost:${appCofig.port}`) )
        
    } catch (error) {
        console.error(error)
        //si pasamos el valor 0 finaliza el proceso 
        process.exit(0)
    }
}
initApp(appCofig, dbConfig)