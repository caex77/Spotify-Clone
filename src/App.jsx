import { React, useState } from 'react'
import { songsData } from './assets/frontend-assets/assets'
import { PlayerProvider } from './components/PlayerContext'
import Leftbar from './components/Leftbar'
import Navbar from './components/Navbar'
import Player from './components/Player'
import Display from './components/Display'
import Rightbar from './components/Rightbar'

const App = () => {
  const [currentSong, setCurrentSong] = useState(songsData[0])

  return (
    <PlayerProvider>
      <div className="h-screen w-screen overflow-hidden bg-black">
        <Navbar />
        <div className="h-[80%] flex">
          <Leftbar />
          <Display />
          <Rightbar />
        </div>
        <Player />
      </div>
    </PlayerProvider>
  )
}

export default App
