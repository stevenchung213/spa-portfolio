import React from 'react';
import NavBar from './NavBar.jsx';
import Wallpaper from './Wallpaper.jsx';
import Top from './Top.jsx';
import styled from 'styled-components';

const Gateway = (props) => {

  const TopContainer = styled.div`
    background-color: black;
    height: 100%;
    width: 100%;
  `;

  return (
    <div id='gateway-container'>
      <NavBar/>
      <Wallpaper/>
      <TopContainer><Top age={props.age}/></TopContainer>
    </div>
  )
};

export default Gateway;