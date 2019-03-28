import React from 'react';
import NavBar from './NavBar.jsx';
import Wallpaper from './Wallpaper.jsx';
import Anchor from './Anchor.jsx';
import Filler from './Filler.jsx';
import About from './About.jsx';
import Tech from './Tech.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';


const Gateway = ({user}) => {

  return (
    <div id='gateway-container'>
      <NavBar/>
      <Wallpaper user={user}/>
      <Anchor section={'about'}/>
      <About user={user}/>
      <Filler section={'tech'}/>
      <Anchor section={'tech'}/>
      <Tech/>
      <Filler section={'projects'}/>
      <Anchor section={'projects'}/>
      <Projects/>
      <Filler section={'contact'}/>
      <Anchor section={'contact'}/>
      <Contact/>
    </div>
  )
};

export default Gateway;
