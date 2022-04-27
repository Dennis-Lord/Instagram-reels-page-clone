import React from 'react';
import '../styles/video__header.css';
import { ArrowBackRounded } from '@mui/icons-material';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

function VideoHeader() {
    return(
        <div className='video__header'>
            <ArrowBackRounded className='c'/>
            <h3>Reels</h3>
            <CameraAltOutlinedIcon className='c'/>
        </div>
    )
}

export default VideoHeader;