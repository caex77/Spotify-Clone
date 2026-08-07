import React from 'react'

const DisplayNavbar = () => {
  return (
    <div className="w-full h-12 gap-3 flex items-center justify-start px-5 bg-[#121212] text-white">
      <p className="bg-white text-black px-4 py-2 rounded-full cursor-pointer">All</p>
      <p className="bg-[#2F2F2F] text-white px-4 py-2 rounded-full cursor-pointer">Music</p>
      <p className="bg-[#2F2F2F] text-white px-4 py-2 rounded-full cursor-pointer">Podcasts</p>
    </div>
  )
}

export default DisplayNavbar
