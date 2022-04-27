import React from 'react';
import '../styles/main.css';
import Nav from './Nav';
import Reels from './Reels';
import SectionContainer from './SectionContainer';

function Main() {
        
        const sectionText = [
            ['HOW IT WORKS', 'Express yourself with short, fun videos.', 'Create multi-clip videos up to 30 seconds, and get creative with easy-to-use text, AR filters and audio. Upload videos from your gallery, too.'],
            ['MAKE IT YOURS','Bring your ideas to life with creative tools.', 'Create seamless transition moments with Align to line up objects between clips. Set a timer to record hands-free, and adjust speed for video and audio.'],
            ['CREATE TOGETHER','Collaborate and play with Remix.','Remix a reel by recording your own video next to someone else\'s. Add your perspective, collab with your community, and make something new.'],
            ['WATCH AND EXPLORE','Discover the best of emerging culture.','Explore the new Reels tab-a space to encounter shareable moments as they happen-or find reels in someone\'s profile. Send reels you like to friends in Messenger, or share them to Stories.']
        ];
               

        return (
        <>
        <div className='main'>
            <Nav />
            <div className='main__c'>
                <div className='bg__c01'>
                    <div className='bg__c'>
                        {/*image container */}
                        <div className='bg__c2'>
                            <img className='bg__i' src='131630116_439754473878919_2599642249122992278_n.jpg' alt='background_image' />
                        </div>
                    </div>
                </div>
                <div className='bg__color'>
                    {/* second colored div container */}
                    <div className='bg__c3'>
                        <div className='bg__c4 bg__c3'>
                            <div className='bg__c5'>
                                <div className='bg__c6'></div>
                            </div>
                            <div className='txt__c'>
                                <div className='txt__c1'>
                                    <div className='txt__c2'>
                                        <div className='txt__c3'>
                                            <div className='txt__cc'>
                                                <div className='cc__'>
                                                    <p className='reels__txt'>REELS</p>
                                                    <p className='reels__txt1'>Create, watch, and share short, entertaining videos</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
            <Reels />
        </div>
        <div className='side__c'>
            <div className='side__bar'></div>
        </div>
        {sectionText.map((content, index) => <SectionContainer key={index} fp={content[0]} h={content[1]} sp={content[2]}/>)}
        </>
        
    )
    
}

export default Main;