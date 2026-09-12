import React from 'react'
import {Route, Routes} from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import DisplayPlaylist from './DisplayPlaylist'
import DisplaySong from './DisplaySong'

const Display = () => {
  return (
    <div className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:flex flex-1 min-w-0">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/playlist/:id" element={<DisplayPlaylist />} />
        <Route path="/song/:id" element={<DisplaySong />} />
      </Routes>
    </div>
  )
}

export default Display
