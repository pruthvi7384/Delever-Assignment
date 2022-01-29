import React from 'react';
import IMAGE from '../assets/image.jpg'
function Second() {
  return (
      <div className="second_bannner">
            <div className='second_banner_row'>
                <div className='body_second1'>
                    <img src={IMAGE} alt=""/>
                    <div className='content'>
                        <h1>What We Offer:</h1>
                        <ul>
                            <li><span><i className="fas fa-check-double"></i></span> Duis aute irue dolor in</li>
                            <li><span><i className="fas fa-check-double"></i></span> Duis aute irue dolor in</li>
                            <li><span><i className="fas fa-check-double"></i></span> Duis aute irue dolor in</li>
                            <li><span><i className="fas fa-check-double"></i></span> Duis aute irue dolor in</li>
                        </ul>
                    </div>
                </div>
                <div className='body_second2'>
                    <div className="actual_body">
                        <h1>BRANDING & DESIGN</h1>
                        <p>Duis aute irue dolor in reperhenderit in volupate velit esse cillum dolore eu fugiat nulla pariatur. Exceteur, sum=nt occaecat cupidatat non proidant, sunt in culpa qui officia deserunt mollit anim.</p>
                        <p>Image from <u>freepik</u></p>
                        <button >LEARN MORE</button>
                    </div>
                </div>
            </div>
      </div>
  );
}

export default Second;
