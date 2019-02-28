import React from 'react';
import NavBar from './NavBar.jsx';
import Wallpaper from './Wallpaper.jsx';
import About from './About.jsx';
import Filler from './Filler.jsx';

const Gateway = ({user}) => {

  return (
    <div id='gateway-container'>
      <NavBar/>
      <Wallpaper/>
      <About user={user}/>
      <Filler/>
    </div>
  )
};

export default Gateway;