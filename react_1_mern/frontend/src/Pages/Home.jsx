import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"
import NoteCard from '../components/NoteCard'
const Home = () => {
  ///const [ratelimit,setRateLimit]=useState(false)
  const [notes,setNotes]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,seterror]=useState(null)

  useEffect(()=>{
    const fetchnotes= async()=>{
      try{
        const res=await axios.get(import.meta.env.VITE_API_URL)
        console.log(res.data)
        setNotes(res.data)
      }catch(error){
        console.log("error fetching notes")
      }
      finally{
        setLoading(false)
      }   
    }
     fetchnotes()
  },[])

  if(loading) return <div>loading</div>
  if(error) return <div>error</div>

  return (
    <>
      <Navbar/>
      <div className='min-h-screen bg-black p-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {notes.length > 0 ? (
            notes.map((note) => (
              <NoteCard 
                key={note._id || note.id} 
                note={note}
              />
            ))
          ) : (
            <div className="text-white col-span-full text-center">
              No notes found
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Home