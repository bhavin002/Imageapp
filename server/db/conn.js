import mongoose from "mongoose";

mongoose.set('strictQuery', false);
const Connection = async () => {
    const URL = `mongodb+srv://Bhavin:bhavin@cluster0.ggl9owx.mongodb.net/Imageupload?retryWrites=true&w=majority`;
  try{
    await mongoose.connect(URL,{useUnifiedTopology: true,useNewUrlParser: true});
    console.log("Database Connection Successfully");
  }
  catch(error){
    console.log("Error While Connecting With The  Database ",error);
  }
}

export default Connection;