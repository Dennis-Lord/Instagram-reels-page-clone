import React from 'react';
import '../styles/video__footer.css';
import { Avatar, Button } from '@mui/material';
import { Favorite,  ModeComment, MoreHorizOutlined, MusicNoteSharp, Send } from '@mui/icons-material';
import Ticker from 'react-ticker';

function VideoFooter({
    channel,
    avatarSrc,
    song,
    url,
    likes,
    comments}) {
    return (
        <div className='video__footer'>
            <div>
            <div className='footer__txt'>
                    <Avatar className='avatar' src={avatarSrc}/>
                    <h3 >{channel} <li/><Button >Follow</Button></h3>
                </div>
                <div className='footer__container'>
                    <div className='footer__ticker'>
                        <MusicNoteSharp/>
                        <Ticker mode='smooth' >
                                {({index}) => (
                                    <>
                                        <p>{song}</p>
                                    </>
                                )}
                        </Ticker>        
                    </div>
                    <li/>
                    <p>Original Audio</p>
                </div>
            </div>
            <div className='footer__actions'>
                <div className='footer__stat'>
                <Favorite /> 
                <p>{likes}</p>
                </div>
                <div className='footer__stat'>
                <ModeComment/>
                <p>{comments}</p>
                </div>
                <Send className='s'/> 
                <MoreHorizOutlined className='m s' />
            </div>
        </div>
    )
}

export default VideoFooter;
