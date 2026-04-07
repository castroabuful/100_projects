import ratelimit from "../config/upstash"




const ratelimiter=async(req,res,next)=>{
try{
const {success}=await ratelimit.limit("my-rate-limit")

if(!success)return res.status(429).json({message:"too many requests sent"})

next()

}catch(error){
res.status(500).json({message:"ratelimit error"})
next(error)
}
}

export default ratelimiter