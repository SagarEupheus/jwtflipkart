import dotenv from "dotenv"
dotenv.config({path:"./config/config.env"});
import express from  "express";
import Connection from "./database/db.js";
import { DefaultData } from "./Default.js";
import cors from "cors"
import Routes from "./routes/routes.js";
// import Cookies from "cookie-parser";
// import bodyParser from "body-parser"

const app = express()




const PORTNUM = process.env.PORT;


const USERNAME = process.env.DB_USER 
const PASSWORD = process.env.DB_PASS 

// console.log(USERNAME,PASSWORD + " hello");


// middlewares
app.use(cors());
// app.use(Cookies());
app.use(express.json())
app.use(express.urlencoded())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));



// routes
app.use("/",Routes)

// login middleware

app.use((res,req,next)=>{
    console.log("HTTP Method " + req.method + "URL" +req.url)
    next()
})
// env file
Connection(USERNAME,PASSWORD)



app.listen(PORTNUM,() =>{
    console.log(`server is running on port ${PORTNUM}`);
})

// to insert data after conncetion and server created
DefaultData()