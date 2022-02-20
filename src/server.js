import express, { Router } from 'express'
import {PORT} from './config/properties.js'
import db from './config/db'
import { urlencoded, json } from "body-parser"
import clinicalRoutes from './routes'

var app = express()
db()

app.use(urlencoded({extended:true}))
app.use(json())

var clinicalRouter = Router()
clinicalRoutes(clinicalRouter)
app.use('/clinicalsapi', clinicalRouter)

app.listen(PORT, (err)=>{
    if (err) console.log(err)
    console.log("Application started on " + PORT)
})