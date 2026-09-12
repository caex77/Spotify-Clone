import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {assets, albumsData, playlistsData} from '../../assets/frontend-assets/assets'
import {ArrowLeftToLine, ArrowRightToLine, Ellipsis} from 'lucide-react'
import ScrollingText from '../ScrollingText'
import {usePlayer} from '../player/PlayerContext'

const Rightbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const {currentSong} = usePlayer()
    const currentAlbum =
        albumsData.find(a => a.id === currentSong?.albumId) 
    const currentPlaylist =
        playlistsData.find(p => p.songs.includes(currentSong?.id))
    const currentItem = 
        currentAlbum ?? currentPlaylist

    const navigate = useNavigate()
    const handleNavigate = () => {
        if (currentAlbum) navigate(`/album/${currentAlbum.id}`)
        else if (currentPlaylist) navigate(`/playlist/${currentPlaylist.id}`)
    }

  return (
    <div className={`group h-full p-2 flex flex-col gap-2 text-white hidden lg:flex transition-all duration-300 overflow-hidden ${isExpanded ? 'w-[25%]' : 'w-[4%]'}`}>
        <div className={`bg-[#121212] h-full rounded p-2 flex flex-col ${isExpanded ? 'items-start justify-start' : 'items-center justify-center'}`}>
            <div className="p-2 gap-3 flex items-center w-full"
                onClick={() => setIsExpanded(!isExpanded)}>
                        {!isExpanded && (
                            <img className="w-6 h-6 cursor-pointer" src={assets.arrow_left} alt="stack" />
                            )}
                        {isExpanded && 
                            (<div className="flex items-center gap-3">
                                <div className="w-0 group-hover:w-5 transition-all duration-300 overflow-hidden flex-shrink-0">
                                    <ArrowRightToLine className="w-5 h-5 cursor-pointer" />
                                </div>
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleNavigate()
                                    }}
                                >
                                <ScrollingText text={currentItem?.name ?? ''} className="w-32" textClassName="font-bold cursor-pointer hover:underline" />
                                </div>
                            </div>)}  
                {isExpanded && (
                <div className="p-2.5 gap-5 flex items-center w-full justify-end">
                    <div className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer flex-shrink-0">
                        <Ellipsis className="w-5 h-5" />
                    </div>
                    <div className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer flex-shrink-0">
                        <img className="w-5 h-5 " src={assets.zoom_icon} alt="expand" />
                    </div>
                </div>
            )}            
            </div>
            
            {isExpanded && currentSong && (
                <div className="w-full flex flex-col items-center justify-between px-4 text-white">
                    <div className="hidden lg:flex gap-4">
                        <img className="w-full rounded-2xl" src={currentSong.image} alt={currentSong.name} />
                    </div>
                    <div className="group/artist flex items-center gap-1 mt-4 mb-6 w-full">
                        <div className="flex flex-col">
                            <p className="font-bold text-2xl hover:underline cursor-pointer">{currentSong.name}</p>
                            <p className="opacity-60 group-hover/artist:opacity-100 transition-opacity duration-300 hover:underline cursor-pointer">{currentSong.desc}</p>
                        </div>
                        <div className="ml-auto bg-[#2F2F2F] p-1 rounded-full border-2 border-[#adadad] flex items-center cursor-pointer">
                            <img className="w-4 h-4 cursor-pointer" src={assets.plus_icon} alt="plus" />
                        </div>
                    </div>
                </div>
                
            )}
        </div>
    </div>
  )
}

export default Rightbar
