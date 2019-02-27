import React from 'react';
import NavBar from './NavBar.jsx';
import Wallpaper from './Wallpaper.jsx';
import About from './About.jsx';

const Gateway = ({user}) => {

  return (
    <div id='gateway-container'>
      <NavBar/>
      <Wallpaper/>
      <About user={user}/>
    </div>
  )
};

export default Gateway;