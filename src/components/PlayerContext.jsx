import React, { createContext, useState, useContext } from 'react'
import { songsData } from '../assets/frontend-assets/assets'

const PlayerContext = createContext()

export const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(songsData[0])

  return (
    <PlayerContext.Provider value={{ currentSong, setCurrentSong }}>
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => useContext(PlayerContext)