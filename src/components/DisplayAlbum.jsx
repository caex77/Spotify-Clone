import React from 'react'
import {useParams} from 'react-router-dom'
import {albumsData, artistsData, songsData} from '../assets/frontend-assets/assets'
import ScrollingText from './ScrollingText'
import {usePlayer} from './PlayerContext'

const DisplayAlbum = () => {
  const {id} = useParams()
  const albumData = albumsData[Number(id)];
  const {setCurrentSong} = usePlayer()

  if (!albumData) {
    return <div className="text-white font-bold mt-10">Album not found</div>
  }

    const artist = artistsData.find(a => a.id === albumData.artistId)


  return (
    <div className="flex flex-col w-full">
      <div className="group flex w-full h-full min-w-0 gap-6 flex-col md:flex-row items-center md:justify-start">
        <img className="w-[clamp(180px,20vw,300px)] rounded shadow-lg" src={albumData.image} alt={albumData.name} />
        <div className="flex flex-col gap-0 @container flex-1 min-w-0 w-full">
          <p className="text-white">{albumData.type}</p>
          <ScrollingText text={albumData.name} className="w-full" textClassName="font-bold cursor-pointer hover:underline text-[clamp(1rem,10cqw,4.5rem)]" />
          {albumData.type === "Album" && (
            <div className="flex items-center gap-2">
              <img
                className="rounded-full w-6 h-6 bg-gray-600"
                src={artist?.image}
                alt={artist?.name ?? albumData.desc}
              />
              <p className="text-gray-400 hover:underline cursor-pointer">
                {artist?.name ?? albumData.desc}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
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
      </div>
    </div>
  )
}

export default DisplayAlbum
