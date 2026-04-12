import React from 'react'
import {PlusIcon} from "lucide-react"
import { Link } from 'lucide-react'

const Navbar = () => {
  return (
  <nav className='flex items-center justify-between px-6 h-14 bg-[oklch(21%_0.034_264.665)] border-b border-green-900 sticky top-0 z-50'>
  
   <h1 className='text-green-400 text-xl font-bold font-mono tracking-tight'>
    ThinkBoard
   </h1>

   <Link to="/create" className='flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-medium px-4 py-2 rounded-full text-sm transition-colors'>
     <PlusIcon className='size-4'/>
     New Note
   </Link>

  </nav>
  )
}

export default Navbar