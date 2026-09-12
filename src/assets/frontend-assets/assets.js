import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import more_icon from './more.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import CigarettesAfterSex from './CigarettesAfterSex.jpg'
import Enhypen from './Enhypen.jpg'
import Glamour from './Glamour.jpg'
import DesireUnleash from './DesireUnleash.jpg'
import InRainbows from './InRainbows.jpg'
import Radiohead from './Radiohead.jpg'
import SadderDays from './SadderDays.jpg'
import SleepPlaylist from './SleepPlaylist.jpg'
import Top50Global from './Top50Global.jpg'
import TopSongsGlobal from './TopSongsGlobal.jpg'
import Top50UK from './Top50UK.jpg'
import Westwood from './Westwood.jpg'
import YinYang from './Yin&Yang.jpg'
import ChillLofiStudy from './ChillLofiStudyPlaylist.jpg'
import CASCov from './CigarettesAfterSexCover.jpg'
import AllINeed from  './songs/All I Need.mp3'
import Apocalypse from  './songs/Apocalypse.mp3'
import UrAllMine from  './songs/Ur All Mine.mp3'
import Yang from  './songs/Yang.mp3'
import Yin from  './songs/Yin.mp3'
import Flashover from  './songs/Flashover.mp3'
import BadDesireKorean from './songs/Bad Desire (With or Without You).mp3'
import Outside from  './songs/Outside.mp3'
import LooseKorean from  './songs/Loose (Korean Ver.).mp3'
import Helium from  './songs/Helium.mp3'
import TooClose from  './songs/Too Close.mp3'
import BadDesire from  './songs/Bad Desire (With or Without You) (English Ver.).mp3'
import Loose from  './songs/Loose.mp3'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    more_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {
        id:0,
        name: "In Rainbows",
        image: InRainbows,
        year: 2007,
        desc:"Radiohead",
        artistId: 0,
        type:"Album",
        bgColor:"#2a4365",
        songs: [0]
    },
    {
        id:1,
        name: "Cry",
        image: CigarettesAfterSex,
        year: 2017,
        desc:"Cigarettes After Sex",
        artistId: 1,
        type:"Album",
        bgColor:"#343333",
        songs: [1]
    },
    {
        id:2,
        name: "Desire Unleash",
        image: DesireUnleash,
        year: 2025,
        desc:"Enhypen",
        artistId: 2,
        type:"Album",
        bgColor:"#06060f",
        songs: [5, 6, 7, 8, 9, 10, 11, 12]
    },
    {
        id:3,
        name: "Glamour",
        image: Glamour,
        year: 2025,
        desc:"Westwood",
        artistId: 3,
        type:"Album",
        bgColor:"#1e1e1e",
        songs: [2]
    },
    {
        id:4,
        name: "Yin & Yang",
        image: YinYang,
        year: 2026,
        desc:"Sadder Days",
        artistId: 4,
        type:"Album",
        bgColor:"#ebedee",
        songs: [3, 4]
    }
]

export const songsData = [
    {
        id:0,
        name: "All I Need",
        image: InRainbows,
        artistId: 0,
        albumId: 0,
        file: AllINeed,
        desc: "Radiohead",
        duration: "3:49"
    },
    {
        id:1,
        name: "Apocalypse",
        image: CASCov,
        artistId: 1,
        albumId: 1,
        file: Apocalypse,
        desc: "Cigarettes After Sex",
        duration: "4:50"
    },
    {
        id:2,
        name: "Ur All Mine",
        image: Glamour,
        artistId: 3,
        albumId: 3,
        file: UrAllMine,
        desc: "Westwood",
        duration: "2:27"
    },
    {
        id:3,
        name: "Yang",
        image: YinYang,
        artistId: 4,
        albumId: 4,
        file: Yang,
        desc:"Sadder Days",
        duration:"2:05"
    },
    {
        id:4,
        name: "Yin",
        image: YinYang,
        artistId: 4,
        albumId: 4,
        file: Yin,
        desc:"Sadder Days",
        duration:"2:05"
    },
    {
        id:5,
        name: "Flashover",
        image: DesireUnleash,
        artistId: 2,
        albumId: 2,
        file: Flashover,
        desc: "Enhypen",
        duration: "2:06"
    },
    {
        id:6,
        name: "Bad Desire (With or Without You)",
        image: DesireUnleash,
        artistId: 2,
        albumId: 2,
        file: BadDesireKorean,
        desc: "Enhypen",
        duration: "2:46"
    },
    {
        id:7,
        name: "Outside",
        image: DesireUnleash,
        artistId: 2,
        albumId: 2,
        file: Outside,
        desc: "Enhypen",
        duration: "2:06"
    },
    {
        id:8,
        name: "Loose (Korean Ver.)",
        image: DesireUnleash,
        artistId: 2,
        albumId: 2,
        file: LooseKorean,
        desc: "Enhypen",
        duration: "3:47"
    },
    {
        id:9,
        name: "Helium",
        image: DesireUnleash,
        artistId: 2,
        albumId: 2,
        file: Helium,
        desc: "Enhypen",
        duration: "2:43"
    },
    {
        id:10,
        name: "Too Close",
        image: DesireUnleash,
        artistId: 2,
        albumId: 2,
        file: TooClose,
        desc: "Enhypen",
        duration: "2:26"
    },
    {
        id:11,
        name: "Bad Desire (With or Without You) (English Ver.)",
        image: DesireUnleash,
        artistId: 2,
        albumId: 2,
        file: BadDesire,
        desc: "Enhypen",
        duration: "2:22"
    },
    {
        id:12,
        name: "Loose",
        image: DesireUnleash,
        artistId: 2,
        albumId: 2,
        file: Loose,
        desc: "Enhypen",
        duration: "3:35"
    }
]

export const playlistsData = [
    {
        id:0,
        name: "Top 50 Global",
        image: Top50Global,
        desc:"Your weekly update of the most played tracks",
        user: "Spotify",
        type:"Public playlist",
        bgColor:"#2a4365",
        songs: []
    },
    {   
        id:1,
        name: "Top 50 UK",
        image: Top50UK,
        desc:"Your weekly update of the most played tracks in the UK",
        user: "Spotify",
        type:"Public playlist",
        bgColor:"#e81825",
        songs: []
    },
    {   
        id:2,
        name: "Top Songs Global",
        image: TopSongsGlobal,
        desc:"Your weekly update of the most played tracks",
        user: "Spotify",
        type:"Public playlist",
        bgColor:"#9921c0",
        songs: []
    },
    {   
        id:3,
        name: "Sleep Playlist",
        image: SleepPlaylist,
        desc:"Calm and relaxing music to help you sleep",
        user: "Spotify",
        type:"Public playlist",
        bgColor:"#102c58",
        songs: []
    },
    {   
        id:4,
        name: "Study Lofi",
        image: ChillLofiStudy,
        desc:"Calm and relaxing music to help you focus",
        user: "Spotify",
        type:"Public playlist",
        bgColor:"#2c7278",
        songs: []
    }
]

export const artistsData = [
    { 
        id: 0, 
        name: "Radiohead", 
        image: Radiohead
    },
    { 
        id: 1, 
        name: "Cigarettes After Sex", 
        image: CigarettesAfterSex
    },
    { 
        id: 2, 
        name: "Enhypen", 
        image: Enhypen
    },
    {   id: 3, 
        name: "Westwood", 
        image: Westwood
    },
    {   id: 4, 
        name: "Sadder Days", 
        image: SadderDays
    }
]