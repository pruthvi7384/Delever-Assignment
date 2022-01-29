import React from 'react';
import IMAGE from '../assets/image.jpg'
function Creative() {
  return (
      <div className='creative_container'>
            <div className='creative_row'>
                <div className='creative_colume1'>
                    <img src={IMAGE} alt=""/>
                </div>
                <div className='creative_colume2'>
                    <h1>Creative Thinking</h1>
                    <p>Lorem ipsum dolor sit amet, et molestie ipsum iaculis sit amet.</p>
                    <p>Image from <u>Freepik</u></p>
                    <button>LEARN MORE</button>
                </div>
            </div>
      </div>
  );
}

export default Creative;
