import mongoose from "mongoose";



const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:false
    },
    content:{
        type:String,
        required:false
    },

},{timestamps:true})

const Note=mongoose .model("Note",noteSchema)

export default Note