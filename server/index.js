import express from 'express';
import Connection from './db/conn.js';
import {router} from './routes/router.js';
import cors from 'cors';

const app = express();
const PORT = 8003;
app.use(router);
app.use(cors());
app.use(express.json());
app.use("/upload",express.static("./upload"));

Connection();

app.listen(PORT,()=>{
    console.log(`Server Running On Port : ${PORT}`);
})