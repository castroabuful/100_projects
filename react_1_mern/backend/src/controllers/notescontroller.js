import Note from "../models/Notes.js"

export async function getAllNotes (req,res){
try{
const notes=await Note.find()

res.status(200).json({success:true,message:"notes loaded successfully",data:notes})

}catch(error){
    console.log("server fethcing data",error)
res.status(500).json({success:false,message:"internal error"})
}
}


export async function getNote(req,res){
try{
const {id}=req.params
const note=await Note.findById(id)

if(!note) return res.status(400).json({success:false,message:"note doesn`t exist"})

res.status(200).json({success:true,message:"note retreived successfully",data:note})

}catch(error){
 res.status(500).json({success:false,message:"internal server error"})   
}
} 




export async function createNote (req,res){
try{
const {title,content}=req.body
const newnote= new Note({title,content})
newnote.save()

res.status(201).json({success:true,message:"new note successfully added",data:newnote})

}catch(error){
    console.log("error in creating notes",error)
res.status(500).json({success:false,message:"internal error"})
}
}


export async function updateNote (req,res){
try{
const {id}=req.params
const {title,content}=req.body

const updatenote=await Note.findByIdAndUpdate(id,{title,content},{new:true})

if(!updatenote) return res.status(400).json({success:false,message:"note not found"})

res.status(200).json({success:true,message:`note ${updatenote.title} updated successfully`,data:updatenote})

}catch(error){
res.status(500).json({success:false,message:"internal server error"})
}    
}


export async function deleteNote(req,res){
try{
const {id}=req.body
const deletednote=await Note.findByIdAndDelete(id)

if(deletednote)return res.status(400).json({success:"false",message:"no note matches that id"})

res.status(200).json({success:true,message:`note ${deletednote.title} has been deleted`})

}catch(error){
res.status(500).json({success:false,message:"internal server error"})
}
}

