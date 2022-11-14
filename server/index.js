import express from 'express';
import { Connection } from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors'
import Routes from './routes/route.js'
import bodyParser from 'body-parser';
dotenv.config();
const user=process.env.USER
const PORT=process.env.PORT
const passwrod=process.env.PASSWORD

const app =express();
app.use(cors())
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use('/',Routes)

Connection(user,passwrod);

app.listen(PORT,() => {console.log(`Server is running on PORT ${PORT}`)})