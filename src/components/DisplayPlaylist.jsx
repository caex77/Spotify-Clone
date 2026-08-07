import React from 'react'
import {useParams} from 'react-router-dom'
import {playlistsData, artistsData} from '../assets/frontend-assets/assets'
import ScrollingText from './ScrollingText'

const DisplayAlbum = () => {
  const {id} = useParams()
  const playlistData = playlistsData[Number(id)];

  if (!playlistData) {
    return <div className="text-white font-bold mt-10">Album not found</div>
  }

  return (
    <div className="group flex w-full h-full min-w-0 gap-6 flex-col md:flex-row items-center md:justify-start">
        <img className="w-[clamp(180px,20vw,300px)] rounded shadow-lg" src={playlistData.image} alt={playlistData.name} />
        <div className="flex flex-col gap-0 @container flex-1 min-w-0">
            <p className="text-white">{playlistData.type}</p>
            <ScrollingText text={playlistData.name} className="w-full" textClassName="font-bold cursor-pointer hover:underline text-[clamp(1.25rem,5vw,4.5rem)]" />
            
            
        </div>
    </div>
  )
}

export default DisplayAlbum
