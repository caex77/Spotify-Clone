import React from 'react'
import {useParams} from 'react-router-dom'
import {albumsData, artistsData, songsData, assets} from '../../assets/frontend-assets/assets'
import ScrollingText from '../ScrollingText'
import Displaybar from '../bars/Displaybar'
import {usePlayer} from '../player/PlayerContext'

const DisplayAlbum = () => {
  const {id} = useParams()
  const albumData = albumsData[Number(id)];
  const {setCurrentSong} = usePlayer()

  if (!albumData) {
    return <div className="text-white font-bold mt-10">Album not found</div>
  }

    const artist = artistsData.find(a => a.id === albumData.artistId)


  return (
    <>
      <div className="flex flex-col w-full">
        <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
          <img className="w-60 rounded shadow-lg" src={albumData.image} alt={albumData.name} />
          <div className="flex flex-col">
            <p className="text-white font-medium">{albumData.type}</p>
            <ScrollingText text={albumData.name} className="w-full" textClassName="font-bold cursor-pointer hover:underline text-[clamp(1rem,10cqw,4.5rem)]" />
            {albumData.type === "Album" && (
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full w-6 h-6 bg-gray-600"
                  src={artist?.image}
                  alt={artist?.name ?? albumData.desc}
                />
                <p className="text-[#a7a7a7] hover:underline cursor-pointer font-medium">
                  <span className="text-white">{artist?.name ?? albumData.desc}</span> · {albumData.year} · {albumData.songs.length} songs · {(() => {
                    const total = albumData.songs.reduce((acc, songId) => {
                      const song = songsData.find(s => s.id === songId)
                      if (song?.duration) {
                        const [mins, secs] = song.duration.split(':').map(Number)
                        return acc + (mins * 60 + secs)
                      }
                      return acc
                    }, 0)
                    return `${Math.floor(total / 60)} min ${total % 60} sec`
                  })()}
                </p>
              </div>
            )}
          </div>
        </div>
        <Displaybar />
        <div className="grid grid-cols-[1fr_200px_200px] px-6 gap-4 w-full text-[#a7a7a7] text-sm font-bold mt-10 mb-4">
          <p><b className="mr-4">#</b>Title</p>
          <p className="text-right hidden md:block">Plays</p>
          <div className="flex justify-end items-center">
            <img className="w-auto h-4" src={assets.clock_icon} alt="Duration" />
          </div>
        </div>
        <hr className="border-gray-600" />
        {albumData.songs.map((songId, index) => {
          const song = songsData.find(s => s.id === songId)
          return (
            <div
              key={song.id}
              onClick={() => setCurrentSong(song)}
              className="cursor-pointer hover:bg-[#ffffff1a] p-2 rounded flex items-center gap-4"
            >
              <div key={index} className="grid grid-cols-[1fr_200px_200px] items-center px-6 mt-2 gap-4 w-full">
                <p className="text-white justify-start flex items-center gap-4">
                  <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                  <div className="flex flex-col">
                    <b className="font-medium">{song.name}</b>
                    <p className="text-[#a7a7a7]">{song.desc}</p>
                  </div>
                </p>
                <p className="text-right hidden md:block">{song.plays}</p>
                <p className="flex justify-end items-center">
                  {song.duration}
                </p>
              </div>
            </div>
          )
        })} 
      </div>

        {/*
        {albumData.songs.map(songId => {
          const song = songsData.find(s => s.id === songId)
          return (
            <div
              key={song.id}
              onClick={() => setCurrentSong(song)}
              className="cursor-pointer hover:bg-[#ffffff1a] p-2 rounded flex items-center gap-4"
            >
              <div>
                <p className="text-white">{song.name}</p>
                <p className="text-gray-400 text-sm">{song.desc}</p>
              </div>
            </div>
          )
        })} 
        */}
      
    </>
  )
}

export default DisplayAlbum
