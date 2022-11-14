import express from 'express'
import {addtodo} from "../controller/todocontroller.js"

const route = express.Router();


route.post('/todos',addtodo);
export default route;