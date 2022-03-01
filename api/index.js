require('dotenv').config()
const app = require('./app')
const connectDB = require('./db/mongodb')
const {appCofig, dbConfig} = require('./config')

//conectaremos la base de datos y levantaremos el servidor 
async function initApp(appCofig, dbConfig){
    try {
        //esperamos que se conecte
        await connectDB(dbConfig)
        //despues se levantara el servidor
        app.listen(appCofig.port, () => console.log(`listen on: http://localhost:${appCofig.port}`) )
        
    } catch (error) {
        console.error(error)
        //si pasamos el valor 0 finaliza el proceso 
        process.exit(0)
    }
}
initApp(appCofig, dbConfig)