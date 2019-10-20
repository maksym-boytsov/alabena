import React from 'react';
import Logo from './static/Logo';
import WaveElement from '../images/graphics/wave.png'

const Main = () => {
  return(
      <section className='main'>
          <div className='logo'>
              <Logo/>
          </div>
          <img src={WaveElement} alt="graphics" className='graphics-wave' style={{bottom: 0}}/>
      </section>
  );
};

export default Main;
