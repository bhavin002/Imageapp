import express from 'express';
import multer from 'multer';
import { DB } from '../model/UserSchema.js';
import moment from 'moment';
export const router = express.Router();


const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"uploads");
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
})

const isimage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true);
    }else
    {
        callback(new Error("Only Image Is Allowed"));
    }
}

const upload = multer({
    storage:imgconfig,
    fileFilter:isimage
})

router.post("/register",upload.single("photo"),async(req,res)=>{
    const imgpath = req.file.filename;
    const title = req.body.title;
    if(!imgpath || !title){
        res.status(401).json({status:401,message:"Fill All The Data"});
    }else{
        try {
            const date = moment(new Date()).format("YYYY-MM-DD");
            const userData = await new DB({
                title:title,
                imgpath:imgpath,
                date:date
            })
            const finalData = await userData.save();
            res.status(201).json({status:201,finalData});
        } catch (error) {
            res.status(401).json({status:401,error});
        }
    }
    
})

router.get("/users",async(req,res)=>{
    try {
        const AlluserData = await DB.find({});
        if(AlluserData){
            res.status(201).json({status:201,AlluserData});
        }
    } catch (error) {
        res.status(401).json({status:401,error});
    }
})