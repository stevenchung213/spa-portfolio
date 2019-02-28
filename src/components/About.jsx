import React, {Fragment} from "react";
import {MDBBtn, MDBIcon} from "mdbreact";

const ButtonPage = () => {

  const style = {
    paddingBottom: 32,
    borderRadius: 50
  };

  return (
    <Fragment>
      <MDBBtn color="elegant" onClick='location.href="https://s3-us-west-1.amazonaws.com/my.portfolio/sc_resume.pdf";'
              style={style}>
        <MDBIcon icon="file-pdf" className="mr-1"/> Résumé
      </MDBBtn>
    </Fragment>
  );
};


const About = ({user}) => {

  const general = {
    height: '55vh',
    width: '100%',
    backgroundColor: 'black',
    padding: '20px 6px',
    display: 'flex',
    flexDirection: 'row'
  };
  const picBox = {
    height: '100%',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const picStyle = {
    position: 'relative',
    verticalAlign: 'middle',
    maxWidth: '80%',
    maxHeight: '80%',
  };
  const textBox = {
    width: '60%',
    padding: '10px 8vw 10px 1vw',
    overflowY: 'auto',
    fontFamily: 'Montserrat, serif',
    fontSize: '1em',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  };
  const button = {};

  return (
    <div id='about-container' style={general}>
      <div id='pic-container' style={picBox}>
        <img id='picture'
             src='https://s3-us-west-1.amazonaws.com/my.portfolio/profile.png'
             alt='profile-pic' style={picStyle}
        />
      </div>
      <div id='text-container' style={textBox}>
        <h3>
          Hello {user === '' ? 'there' : user},
        </h3>
        <br/>
        <p> I'm just another developer and I'm writing this just to fill in some space. I'm just another developer and I'm writing this just
          to fill in some space. You developer and I'm writing this just to fill in some space. a s d f x c vd f gh h t erke kw l k op i u y
          t g h j k l m n b jh g j r h e j th j k l k j n b v c x z a s d f g h j t r e w q s d f g h j k b.
        </p>
        <br/>
        <p>
          Maybe some more here....................I'm just another developer and I'm writing this just to fill in some space. I'm just
          another developer and I'm writing this just to fill in some space.
        </p>
        <ButtonPage/>
        {/*<form>*/}
        {/*<MDBIcon icon="file-pdf"/>*/}
        {/*<input type='button' value=''*/}
        {/*onClick='location.href="https://s3-us-west-1.amazonaws.com/my.portfolio/sc_resume.pdf";' style={button}/>*/}
        {/*</form>*/}
      </div>
    </div>
  );
};

export default About;