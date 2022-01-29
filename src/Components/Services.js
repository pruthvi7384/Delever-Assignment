import React from 'react';

function Services() {
  return (
      <div className='services'>
          <div className="services_heading">
              <p>Image from freepik</p>
          </div>
          <div className="services_contaent">
              <div className="description">
                  <h3>ABOUT COMPANY</h3>
                  <h1>Need Amazing Design?</h1>
                  <p>Paragraph. Lorem ipsum dolor sit amet, conscecteur adipiscing elit. Curabitur id suscuit ex. Suspendisse rhoncus laoreet purus <u>quis elementum.</u> Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
                  <button>LEARN MORE</button>
              </div>
              <div className="description_Cards">
                  <div className="first_card_collum">
                      <div className="card_body">
                          <i className="fas fa-project-diagram"></i>
                          <h3>Sample Headline</h3>
                          <p><i>Sample text. Click to select the text box. Click again or double click to start editing the text.</i></p>
                      </div>
                      <div className="card_body">
                          <i className="fas fa-briefcase"></i>
                          <h3>Sample Headline</h3>
                          <p><i>Sample text. Click to select the text box. Click again or double click to start editing the text.</i></p>
                      </div>
                  </div>
                  <div className="second_card_collum">
                        <div className="card_body">
                            <i className="far fa-lightbulb"></i>
                            <h3>Sample Headline</h3>
                            <p><i>Sample text. Click to select the text box. Click again or double click to start editing the text.</i></p>
                        </div>
                        <div className="card_body">
                            <i className="fas fa-camera"></i>
                            <h3>Sample Headline</h3>
                            <p><i>Sample text. Click to select the text box. Click again or double click to start editing the text.</i></p>
                        </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Services;
