import React from 'react'
import {assets} from '../assets/frontend-assets/assets'
import {usePlayer} from './PlayerContext'

const Player = () => {
    const {currentSong} = usePlayer()

  return (
    <div className="h-[10%] bg-black flex justify-between items-center px-4 text-white">
        <div className="flex items-center gap-4">
            <img className="w-14" src={currentSong.image} alt={currentSong.name} />
            <div>
                <p className="hover:underline cursor-pointer">{currentSong.name}</p>
                <p className="text-gray-400 hover:underline cursor-pointer">{currentSong.desc}</p>
            </div>
            <div className="ml-auto bg-[#2F2F2F] p-1 rounded-full border-2 border-[#adadad] flex items-center cursor-pointer">
                <img className="w-2 h-2 cursor-pointer" src={assets.plus_icon} alt="plus" />
            </div>
        </div>
        <div className="flex flex-col items-center gap-4 m-auto">
            <div className="flex items-center gap-5">
                <img className="w-4 h-4 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
                <img className="w-4 h-4 cursor-pointer" src={assets.prev_icon} alt="Previous" />
                <div className="bg-[#2F2F2F] rounded-full p-3 cursor-pointer">
                    <img className="w-4 h-4 cursor-pointer" src={assets.play_icon} alt="Play" />
                </div>
                <img className="w-4 h-4 cursor-pointer" src={assets.next_icon} alt="Next" />
                <img className="w-4 h-4 cursor-pointer" src={assets.loop_icon} alt="Loop" />
            </div>
            <div className="flex items-center gap-5">
                <p className="text-gray-400 text-xs">0:00</p>
                <div className="w-[60vw] max-w-[600px] bg-[#444444] rounded-full cursor-pointer">
                    <hr className="h-1.5 border-none w-0 bg-white rounded-full"/>
                </div>
                <p className="text-gray-400 text-xs">3:49</p>
            </div>
        </div>
        <div className="flex items-center gap-4 opacity-75">
            <img className="w-4 h-4 cursor-pointer" src={assets.mic_icon} alt="Mic" />
            <img className="w-4 h-4 cursor-pointer" src={assets.queue_icon} alt="Queue" />
            <img className="w-4 h-4 cursor-pointer" src={assets.speaker_icon} alt="Speaker" />
            <img className="w-4 h-4 cursor-pointer" src={assets.volume_icon} alt="Volume" />
            <div className="w-[100px] bg-gray-600 rounded-full cursor-pointer">
                <div className="h-1 border-none w-[50%] bg-white rounded-full"></div>
            </div>
            <img className="w-4 h-4 cursor-pointer" src={assets.mini_player_icon} alt="Mini Player" />
            <img className="w-4 h-4 cursor-pointer" src={assets.zoom_icon} alt="Expand" />
        </div>
    </div>
  )
}

export default Player
