import mongoose from "mongoose"




export const connectDB=async()=>{
try{
await mongoose.connect(process.env.URL)
console.log("MONGO CONNECTED")
}catch(error){
console.log("can`t connect to data base",error)
process.exit(1)
}
}