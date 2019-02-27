import React from 'react';
import styled from 'styled-components';
import {MDBInput} from "mdbreact";

const User = (props) => {

  const General = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    font-family: Montserrat, serif;
  `;
  const Buttons = styled.div`
    display: flex;
    justify-content: center;
  `;
  const button = {
    borderRadius: 20,
    width: '10vw',
    height: 40,
    color: 'black',
    fontSize: 20,
    fontFamily: 'Montserrat, serif',
    backgroundColor: 'white'
  };

  return (
    <General>
      <div id='age-container'>
        <form>
          <label>
            <MDBInput label="enter name" icon="user"
                      onChange={props.getUserName}
                      style={{marginTop: '35vh'}}/>
          </label>
          <Buttons>
            <input type='button' value='submit'
                   onClick={props.onClick}
                   style={button}/>
          </Buttons>
        </form>
      </div>
    </General>
  );
};

export default User;