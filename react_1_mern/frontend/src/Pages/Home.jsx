

import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"
import { Meta } from 'react-router'
const Home = () => {
  ///const [ratelimit,setRateLimit]=useState(false)
  const [notes,setNotes]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,seterror]=useState(null)

  useEffect(()=>{
    const fetchnotes= async()=>{
      try{
        const res=await axios.get(Meta.)
        console.log(res.data)
        setNotes(res.data)
      }catch(error){
        console.log("error fetching notes")
      }
      finally{
        setLoading(false)
      }
    }
  },[])

  if(loading) return <div></div>

  return (
    <>
     <Navbar/>
    <div className='min-h-screen bg-black grid grid-cols-2'>
      
    </div>
    </>
  )
}

export default Home