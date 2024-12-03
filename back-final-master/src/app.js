import express from 'express'
import cors from 'cors'
import fileUpload from "express-fileupload"
import router from './routes.js'
// Configurando o dotenv


const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(fileUpload())
app.use(router)

app.listen(3000,()=>{ console.log('runnning!') })