import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MessageIcon from '@mui/icons-material/Message'
import ShareIcon from '@mui/icons-material/Share'
import React, { useState } from 'react'
import './VideoSidebar.css'

function VideoSidebar ( {likes, shares, messages} ) {
    const [liked, setLiked] = useState(false)

    return (
        <div className="videoSidebar">
            <div className="videoSideBar__button">
                {liked ? (
                        <FavoriteIcon 
                            fontSize='large'
                            onClick={() => setLiked(false)}
                        />
                        ) : (
                        <FavoriteBorderIcon
                            fontSize='large'
                            onClick={() => setLiked(true)}
                        />
                )}
                <p>{liked ? `${likes + 1}` : `${likes}`}</p>
            </div>
            <div className="videoSideBar__button">
                <MessageIcon fontSize='large' />
                <p>{messages}</p>
            </div>
            <div className="videoSideBar__button">
                <ShareIcon fontSize='large' />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar