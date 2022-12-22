import express from 'express';
import multer from 'multer';
import { DB } from '../model/UserSchema.js';
import moment from 'moment';
export const router = express.Router();


const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./upload");
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
})

const isimage = (req,file,callback)=>{
    if(file.mimetype.startswith("image")){
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
    const {filename} = req.file;
    const {title} = req.body;

    if(!filename || !title){
        res.status(401).json({status:401,message:"Fill All The Data"});
    }
    try {
        const date = moment(new Date()).format("YYYY-MM-DD");
        const userData = new DB({
            title:title,
            imgpath:filename,
            date:date
        })
        const finalData = await userData.save();
        res.status(201).json({status:201,finalData});
    } catch (error) {
        res.status(401).json({status:401,error});
        
    }
})