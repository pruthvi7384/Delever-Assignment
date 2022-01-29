import React from 'react';
import NavBar from './Components/NavBar';
import HomeBanner from './Components/HomeBanner';
// ========Exyernal Style Sheet Import==========
import './Style.css';
import Services from './Components/Services';
import Creative from './Components/Creative';
import Do from './Components/Do';
import Second from './Components/Second';
import About from './Components/About';

function App() {
  return (
    <>
      <NavBar/>
      <HomeBanner/>
      <Services/>
      <Second/>
      <Creative/>
      <About/>
      <Do/>
    </>
  );
}

export default App;
