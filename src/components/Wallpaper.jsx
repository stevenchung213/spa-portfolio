import React from 'react';
import styled from "styled-components";
import {MDBIcon} from "mdbreact";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Bounce, Fade} from 'react-reveal';


const Wallpaper = ({user}) => {

  const Background = styled.div`
    background-image: url("https://s3-us-west-1.amazonaws.com/my.portfolio/city_skyline.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
  `;
  const general = {
    position: 'absolute',
    top: '45%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 1,
    width: '100%',
    margin: 'auto'
  };
  const intro = {
    borderRadius: '5rem',
    background: 'white',
    maxWidth: '100%',
    height: 'auto',
    width: 'auto',
    margin: 'auto',
    padding: '3vh 6vw',
    marginBottom: '1vh'
  };
  const hello = {
    color: 'black',
    marginBottom: '1vh',
    fontSize: '220%',
    textAlign: 'center',
    fontWeight: 900,
    height: 'auto'
  };
  const sub = {
    color: 'black',
    margin: 'auto',
    fontSize: '0.9rem',
    textAlign: 'center',
    fontWeight: 900
  };
  const arrow = {
    margin: 'auto'
  };

  return (
    <Fade clear>
      <div>
        <div id='hello' style={general}>
          <Bounce top>
            <div id='intro' style={intro}>
              <div>
                <h1 className='h1-responsive' style={hello}>
                  HEY THERE{user === '' ? '!' : ` ${user}!`}
                </h1>
              </div>
              <div>
                <p style={sub}>
                  - FULL STACK SOFTWARE ENGINEER -
                </p>
              </div>
            </div>
          </Bounce>
          <Bounce bottom>
            <div id='down-arrow' style={arrow}>
              <AnchorLink href='#about-nav'>
                <MDBIcon icon="angle-double-down fa-6x" className='white-text'/>
              </AnchorLink>
            </div>
          </Bounce>
        </div>
        <Background/>
      </div>
    </Fade>
  );
};

export default Wallpaper;
