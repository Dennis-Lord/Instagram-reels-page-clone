import React from 'react';
import '../styles/section__.css';

function Section ({firstParagraph, heading, secondParagraph}) {
    return(
        <div className='section'>
            <div className='s__c'>
                <div className='r__div'>
                </div>
                <div className='l__div'>
                    <div className='l__c1'>
                        <div className='l__c2'>
                            <div className='lc__txt'>
                                <p className='l__p'> {firstParagraph} </p>
                                <h2 className='l__h'>{heading}</h2>
                                <p className='l__p1'>{secondParagraph}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;