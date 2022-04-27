import React, { useRef, useState } from 'react';
import '../styles/video__card.css';

function VideoCard() {
    // useref to set state of video: playing or paused
    const [isVideoPlaying, setIsVideoPlaying] =useState(false);
    const videoRef = useRef(null); // set ref pointer to null on window load

    const onVideoPress = () => {
        if(isVideoPlaying) { // is video is playing then pause
            // stop / pause video 
            videoRef.current.pause();
            setIsVideoPlaying(false);// set state of setIsVideoPlaying to false
        }else {
            // play video
            videoRef.current.play();// is video paused then play
            setIsVideoPlaying(true); // set state of setIsVideoPlaying to true
        }
    }

    return(
        <div className='video__card'>
            {/* set ref to point to reel video */}
            <video ref={videoRef} onClick={onVideoPress} className='video__player' src='SonOfJacobonInstagram.mp4' alt='ig-reels-video' loop/>
             {/* video footer component */}
        </div>
    )
}

export default VideoCard;