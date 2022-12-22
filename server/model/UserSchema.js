import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imgpath:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
});

export const DB = new mongoose.model("uploadImage",UserSchema);
