import express from "express";
import dotenv from 'dotenv';
import { dbConnection } from "./db/connection.js";
import userRoute from "./routes/userRoutes.js";
import cors from 'cors';

let app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
let port = process.env.PORT;
let dbString =process.env.DBSTRING;
let dbName = process.env.DBNAME;
app.use('/user',userRoute)
dbConnection(dbString,dbName)
app.listen(port,()=>{
    console.log(`server running http://localhost:${port}`);
})


