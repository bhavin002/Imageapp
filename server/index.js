import express from 'express'
import Connection from './db/conn.js';

const app = express();
const PORT = 8003;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.get("/",(req,res)=>{
    res.send("Hello Server");
})
Connection(username,password);

app.listen(PORT,()=>{
    console.log(`Server Running On Port : ${PORT}`);
})