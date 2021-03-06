import React from "react";
import {MDBIcon} from 'mdbreact';
import {Fade} from "react-reveal";
import Spin from "react-reveal/Spin";


const Contact = () => {

  const general = {
    minHeight: 'auto',
    height: '40%',
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    paddingTop: '2vh',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column'
  };
  const icons = {
    display: 'inline-flex',
    width: 'auto',
    justifyContent: 'space-evenly'
  };
  const icon = {
    margin: '0 2vw'
  };
  const trademark = {
    position: 'relative',
    display: 'inline-flex',
    margin: '1vh auto 0'
  };
  return (
    <Fade clear>
      <div id='contact-container' style={general}>
        <div className='contact-icons mx-auto' style={icons}>
          <Spin>
            <div className="contact-icons" style={icon}>
              <a target="_blank" rel="noopener noreferrer"
                 href='https://www.linkedin.com/in/stevenchung-213'
                 aria-label="contact-LinkedIn">
                <MDBIcon fab icon="linkedin-in fa-2x" className='black-text'/>
              </a>
            </div>
          </Spin>
          <Spin>
            <div className="contact-icons" style={icon}>
              <a target="_blank" rel="noopener noreferrer"
                 href='https://www.github.com/stevenchung213'
                 aria-label="contact-Github">
                <MDBIcon fab icon="github fa-2x" className='black-text'/>
              </a>
            </div>
          </Spin>
          <Spin>
            <div className="contact-icons" style={icon}>
              <a target="_blank" rel="noopener noreferrer"
                 href='mailto:stevenchung.213@gmail.com'
                 aria-label="contact-Gmail">
                <MDBIcon far icon="envelope fa-2x" className='black-text'/>
              </a>
            </div>
          </Spin>
        </div>
        <div style={trademark}>
          <h5 className='h5-responsive' style={{fontWeight: 500}}>
            Made by STEVEN CHUNG 2018
          </h5>
          <MDBIcon icon="trademark" style={{paddingLeft: '0.2vw'}}/>
        </div>
      </div>
    </Fade>
  )
};

export default Contact;
