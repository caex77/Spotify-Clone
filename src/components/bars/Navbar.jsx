import {React, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {assets} from '../../assets/frontend-assets/assets'
import { useHistoryStack } from '../useHistoryStacks'

const Navbar = () => {
    const navigate = useNavigate()
    const {canGoBack, canGoForward} = useHistoryStack()

  return (
    <div className="w-full h-[8%] bg-black flex items-center justify-between px-4 text-white">
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 ml-20">
                <button onClick={() => navigate(-1)}
                    disabled={!canGoBack}
                    className={`rounded-full p-1 ${canGoBack ? 'bg-black cursor-pointer' : 'bg-black opacity-40 cursor-not-allowed'}`}>
                    <img className="w-5" src={assets.arrow_left} alt="Back" />
                </button>
                <button onClick={() => navigate(1)}
                    disabled={!canGoForward}
                    className={`rounded-full p-1 ${canGoForward ? 'bg-black cursor-pointer' : 'bg-black opacity-40 cursor-not-allowed'}`}>
                    <img className="w-5 cursor-pointer" src={assets.arrow_right} alt="Forward" />
                </button>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <div className="bg-[#121212] rounded-full p-2 cursor-pointer">
                <Link to="/">
                    <img className="w-6" src={assets.home_icon} alt="Home" />
                </Link>
            </div>
            <div className="bg-[#121212] rounded-full p-2 cursor-pointer w-100">
                <img className="w-6" src={assets.search_icon} alt="Search" />
            </div>
        </div>
        <div className="flex items-center gap-6">
            <p className="bg-[#87CEFA] text-black w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">L</p>
            <img className="w-6 cursor-pointer" src={assets.bell_icon} alt="Bell" />
        </div>
    </div>
  )
}

export default Navbar
