const mongoose = require('mongoose')

//para ver si esta coectado correctamete 
mongoose.connection.on('open', ()=> console.log('db connected'))

async function connectDB({host,port, dbName}) {
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri)
}

module.exports = connectDB