import React from 'react';

const About = ({user}) => {

  const general = {
    height: '55vh',
    width: '100%',
    backgroundColor: 'black',
    padding: '20px 6px',
    display: 'inline-flex',
    flexDirection: 'row'
  };
  const picStyle = {
    opacity: 1,
    paddingLeft: '3vw',
    maxWidth: '100%',
    maxHeight: '100%',
    width: 'auto',
    height: 'auto'
  };

  return (
    <div id='about-container' style={general}>
      <img id='picture'
           src='https://s3-us-west-1.amazonaws.com/my.portfolio/profile.png'
           alt='profile-pic' style={picStyle}
      />
      <p>
        Hello {user === '' ? 'there' : user},
      </p>
      <br/>
      <p>
        I'm just another highly personable
      </p>

    </div>
  );
};

export default About;