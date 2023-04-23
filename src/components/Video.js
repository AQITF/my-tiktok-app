import { useRef, useState } from "react"
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video( {url, channel, description, song, likes, shares, messages} ) {

    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)

    const OnVideoPress = () => {
        if(playing) {
            videoRef.current.pause()
            videoRef.current.muted = true
            setPlaying(false)
        }
        else {
            videoRef.current.play()
            videoRef.current.muted = false
            setPlaying(true)
        }
    }

    return (
        <div className="video">
            <video
            className="video__player"
            loop
            autoPlay
            preLoad='auto'
            muted
            onClick={OnVideoPress}
            src={url}
            ref={videoRef}
            ></video>

            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>
        </div>
    )
}

export default Video

