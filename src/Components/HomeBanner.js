import React from 'react';
// ======Importing Image====
import BGIMAGE from '../assets/bg.png';

function HomeBanner() {
  return (
      <>
      <div className="home_banner" >
        <div className='home_image'>
          <img src={BGIMAGE} alt=""/>
        </div>
         <div className="card_div">
            <div className="first_card">
              <div className="first">
                <h1>Digital Art & Design Studio</h1>
                <p>Duis aute irue dolor in reperhenderit in volupate velit esse cillum dolore eu fugiat nulla pariatur. Exceteur, sum=nt occaecat cupidatat non proidant, sunt in culpa qui officia deserunt mollit anim.</p>
                <p><u>LEARN MORE</u></p>
              </div>
            </div>
            <div className="second_card">
              <div className='second'>
                <h1>Our Mission</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur, Excepteur sint occaecat cupidatat non proident.</p>
                </div>
              </div>
         </div>
      </div>
      </>
  );
}

export default HomeBanner;
