import React from 'react';
import '../styles/section__container.css';
import Section from './Section';

function SectionContainer ({fp, h, sp}) {
    return (
        <div className='section__container'>
            <Section firstParagraph={fp} heading={h} secondParagraph={sp}/>
        </div>
    )
}

export default SectionContainer;