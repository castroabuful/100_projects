import { Link } from 'react-router-dom' // Fixed: react-router-dom not react-router
import React from 'react'

const NoteCard = ({ note }) => { // Accept note as prop
  
  // Truncate content to show preview (first 100 characters)
  const truncateContent = (text, maxLength = 100) => {
    if (!text) return '';
    return text.length > maxLength 
      ? text.substring(0, maxLength) + '...' 
      : text;
  }

  return (
    <div className="card bg-primary text-primary-content w-full">
      <div className="card-body">
        <h2 className="card-title">{note.title || 'Untitled'}</h2>
        <p>{truncateContent(note.content || note.description)}</p>
        <div className="card-actions justify-end">
          <Link to={`/note/${note._id || note.id}`} className="btn">
            Edit
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NoteCard