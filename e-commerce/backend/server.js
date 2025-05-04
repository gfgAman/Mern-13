import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { router } from './routes/users.routes.js'

dotenv.config()

const PORT = process.env.PORT || 3001
const MONGOURL = process.env.MONGOURL
const app = express()

try {
    mongoose.connect(MONGOURL)
    console.log('database is connected!!!');
}
catch (err) {
    console.log(err);
}

app.use(express.json())

app.use(router)

app.get('/get', (req, res) => res.send('working perfectly!!!!'))
app.listen(PORT, () => console.log(`server is running ${PORT}`))