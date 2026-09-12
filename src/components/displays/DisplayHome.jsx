import React from 'react'
import DisplayNavbar from './DisplayNavbar'
import {albumsData,  playlistsData, songsData} from '../../assets/frontend-assets/assets'
import AlbumItem from '../item/AlbumItem'
import SongItem from '../item/SongItem'
import PlaylistItem from '../item/PlaylistItem'

const DisplayHome = () => {
  return (
    <div className="w-full flex flex-col">
      <DisplayNavbar />
      <div className="mb-4">
        <h1 className="my-5 text-2xl font-bold text-white">Featured  Charts</h1>
        <div className="flex overflow-auto">
        {playlistsData.map((item,index) => (
          <PlaylistItem 
            key={index}
            id={index}
            image={item.image}
            name={item.name}
            desc={item.desc}
            type={item.type}
          />
        ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 text-2xl font-bold text-white">Today's Singles</h1>
        <div className="flex overflow-auto">
        {songsData.map((item,index) => (
          <SongItem 
            key={index}
            id={index}
            image={item.image}
            name={item.name}
            desc={item.desc}
          />
        ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 text-2xl font-bold text-white">Popular Albums</h1>
        <div className="flex overflow-auto">
        {albumsData.map((item,index) => (
          <AlbumItem 
            key={index}
            id={index}
            image={item.image}
            name={item.name}
            desc={item.desc}
            type={item.type}
          />
        ))}
        </div>
      </div>
    </div>
  )
}

export default DisplayHome
