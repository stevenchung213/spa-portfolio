import React from 'react';
import styled from "styled-components";
import About from "./About.jsx";

const Top = (props) => {

  const Over18 = styled.div`
    background-image: url("https://s3-us-west-1.amazonaws.com/my.portfolio/background1.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
  `;
  const Under18 = styled.div`
    background-image: url("https://s3-us-west-1.amazonaws.com/my.portfolio/background2.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
  `;

  return (
    <div id='top-container'>
      {props.age ? <Over18/> : <Under18/>}
    </div>
  )
};

export default Top;