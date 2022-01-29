import React from 'react';
// =====Importing Boostrap Styled Components======
import { Container } from 'react-bootstrap';

function NavBar() {
  return (
        <Container>
            <div className='navbar'>
                <div className="logo">
                    <p>logo</p>
                </div>
                <div className="Icon">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </Container>
  );
}

export default NavBar;
