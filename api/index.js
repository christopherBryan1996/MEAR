require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.APP_PORT
const foo = 0;
app.listen(port, () => console.log(`listen on: http://localhost:${port}`) )