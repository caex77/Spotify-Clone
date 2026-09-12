import { React, useState } from 'react'
import { songsData } from './assets/frontend-assets/assets'
import { PlayerProvider } from './components/player/PlayerContext'
import Leftbar from './components/bars/Leftbar'
import Navbar from './components/bars/Navbar'
import Player from './components/player/Player'
import Display from './components/displays/Display'
import Rightbar from './components/bars/Rightbar'

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
