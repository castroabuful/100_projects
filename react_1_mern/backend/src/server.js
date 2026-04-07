import dotenv from "dotenv"
dotenv.config({ path: "./src/.env" })

import express from "express"
import {connectDB} from "./config/db.js"
import notetoutes from "./routes/noteroutes.js"
import ratelimiter from "./Middleware/rateLimiter.js"

const app=express()



const port=process.env.PORT||5000
const url=process.env.URL

app.use(express.json());
app.use(ratelimiter)


app.use("/api/notes",notetoutes)

connectDB().then(()=>{
app.listen(port,()=>{
    console.log(url)
    console.log(`listening from port${port}`)
    console.log(`localhost:${port}/api/notes`)
})
})
