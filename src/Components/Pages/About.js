import React from 'react';
import '../Styles/About.css'

import CardPackTop from '../Cards/CardPackTop'
import HeaderLine from '../HighLineHeader/HighLineHeader'

function About() {
  return (
    <div className='about-container'>
        <div className='about-itam1'><HeaderLine /></div>
        <div className='about-itam2'><CardPackTop /></div>
        <div ClassName='about-itam3'>Dominic</div>
    </div> 
  );
}

export default About;