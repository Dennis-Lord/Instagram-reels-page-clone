import React from 'react';
import '../styles/reels__.css';
import VideoCard from './VideoCard';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function Reels() {
    return(
        
        <div className='reels__c'>
            <VideoHeader /> {/* video header component */}
            {/* Reel videos container */}
            <div className='reels__videos'> {/* Reel videos div @scrollable */}
                <VideoCard/>
                <VideoCard />
                <VideoCard />
            </div>
            <VideoFooter 
            channel='SonOfJacob'
            avatarSrc=''
            song='Celebrate - Kwesi Arthur ft Teni'
            url='link'
            likes='21.3K'
            comments='1.3K'
            />
        </div>
    )
}

export default Reels