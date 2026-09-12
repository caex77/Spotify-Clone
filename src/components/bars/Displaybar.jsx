import  {React, useState} from 'react'
import {assets} from '../../assets/frontend-assets/assets'

const Displaybar = () => {
  return (
    <div className="flex flex-row items-center px-6 gap-7 w-full h-[40%] text-[#a7a7a7] text-sm font-bold mt-10 mb-4">
        <div className="bg-[#800020] rounded-full p-6 cursor-pointer">
            <img className="w-4 h-4 cursor-pointer" src={assets.play_icon} alt="Play" />
        </div>
        <div className="cursor-pointer opacity-75 hover:opacity-100 transition-opacity duration-300">
            <img className="w-8 h-8 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
        </div>
        <div className="bg-[#2F2F2F] p-1 rounded-full border-3 border-[#adadad] cursor-pointer hover:opacity-100 transition-opacity duration-300">
            <img className="w-6 h-6 cursor-pointer" src={assets.plus_icon} alt="plus" />
        </div>
        <div className="cursor-pointer opacity-75 hover:opacity-100 transition-opacity duration-300">
            <img className="w-8 h-8 cursor-pointer" src={assets.more_icon} alt="More" />
        </div>
    </div>
  )
}

export default Displaybar
