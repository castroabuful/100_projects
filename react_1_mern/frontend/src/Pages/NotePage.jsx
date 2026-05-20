import React from 'react'

const NotePage = ({note}) => {
  return (
    <div className='h-screen '>
      <h1 className=''>{note.title||'untitled'}</h1>
      <p className=''>{note.content||note.description}</p>
    </div>
  )
}

export default NotePage