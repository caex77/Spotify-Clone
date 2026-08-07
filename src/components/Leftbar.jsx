import  {React, useState} from 'react'
import {assets} from '../assets/frontend-assets/assets'
import {ArrowLeftToLine, ArrowRightToLine} from 'lucide-react'

const Leftbar = () => {
    const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className={`h-full p-2 flex flex-col gap-2 text-white hidden lg:flex flex-shrink-0 transition-all duration-300 ${isExpanded ? 'w-[20%]' : 'w-[4.5%] min-w-[72px]'}`}>
        <div className="bg-[#121212] h-full rounded p-2">
            <div className="p-2 flex items-center justify-between" >
                <div className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setIsExpanded(!isExpanded)}>
                        {!isExpanded && (
                            <div className="group flex items-center justify-center gap-3 cursor-pointer relative">
                                <div className="relative flex items-center w-8 h-8 ">
                                    <img className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300" src={assets.stack_icon} alt="stack" />
                                    <ArrowRightToLine className=" w-8 h-8 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>)}
                        {isExpanded && 
                            (<div className="group flex items-center gap-3 cursor-pointer">
                                <div className="w-0 group-hover:w-5 transition-all duration-300 overflow-hidden">
                                    <ArrowLeftToLine className="w-5 h-5" />
                                </div>
                                <p className="font-bold">Your Library</p>
                            </div>)}
                </div>
                {isExpanded && (
                    <div className="flex items-center gap-2">
                        <div className="bg-[#2F2F2F] p-2 rounded-full flex items-center gap-2 cursor-pointer">
                            <img className="w-[clamp(0.875rem,1.2vw,1.25rem)]" src={assets.plus_icon} alt="plus" />
                            <p className="font-bold text-[clamp(0.3rem,0.8vw,0.875rem)] hidden xl:block">Create</p>
                        </div>
                        <div className="bg-[#2F2F2F] p-2 rounded-full flex items-center gap-2 cursor-pointer">
                            <img className="w-[clamp(0.875rem,1.2vw,1.25rem)]" src={assets.zoom_icon} alt="expand" />
                        </div>
                    </div>
                )}
            </div>
            {isExpanded && (
                <div className="p-4 bg-[#242424] rounded flex flex-col gap-2 item-start justify-start mt-4">
                    <h1>Create your first playlist</h1>
                    <p className="text-gray-400">Get started by creating your first playlist</p>
                    <button className="px-3 py-2 bg-[#1DB954] rounded-full text-black font-bold cursor-pointer mt-3">Create Playlist</button>
                </div>
            )}
        </div>
      
    </div>
  )
}

export default Leftbar
