import React from 'react';
import NavBar from './NavBar.jsx';
import Wallpaper from './Wallpaper.jsx';
import About from './About.jsx';
import Filler from './Filler.jsx';
import Tech from './Tech.jsx';
import Projects from './Projects.jsx';

const Gateway = ({user, projectSelected, clickProject, deSelectProject}) => {
  const tech = {
    name: 'tech'
  };
  const projects = {
    name: 'projects'
  };
  const contact = {
    name: 'contact'
  };
  return (
    <div id='gateway-container'>
      <NavBar/>
      <Wallpaper/>
      <About user={user}/>
      <Filler section={tech}/>
      <Tech/>
      <Filler section={projects}/>
      <Projects projectSelected={projectSelected}
                clickProject={clickProject}
                deSelectProject={deSelectProject} />
    </div>
  )
};

export default Gateway;