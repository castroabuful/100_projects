import dotenv from "dotenv"
import express from "express"
import cors from "cors"

dotenv.config({ path: "./src/.env" })


import {connectDB} from "./config/db.js"
import notetoutes from "./routes/noteroutes.js"
///import ratelimiter from "./Middleware/rateLimiter.js"

const app=express()



const port=process.env.PORT||5000
const url=process.env.URL

app.use(cors({
    origin:"http://localhost:5173",
}))
app.use(express.json());
///app.use(ratelimiter)


app.use("/api/notes",notetoutes)

connectDB().then(()=>{
app.listen(port,()=>{
    console.log(url)
    console.log(`listening from port${port}`)
    console.log(`localhost:${port}/api/notes`)
})
})
