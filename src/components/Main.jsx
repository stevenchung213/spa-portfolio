import React, {Component} from 'react';
import Age from './Age.jsx';
import Gateway from './Gateway.jsx';
import styled from 'styled-components';

export default class Main extends Component {
  constructor () {
    super();

    this.state = {
      init: false,
      adult: true,
      view: ''
    };
  }

  handleClick = (el) => {
    if (el.target.name === 'ofAge') {
      this.setState({adult: true, init: true});
      console.log(this.state.adult);
    } else {
      this.setState({adult: false, init: true});
      console.log(this.state.adult);
    }
  };

  render () {

    const GatewayContainer = styled.div`
      background-color: black;
      height: 100vh;
      width: 100vw;
    `;

    return (
      <div id="main-container">
        { !this.state.init &&
          <Age onClick={this.handleClick}/>
        }
        { this.state.init &&
        <GatewayContainer><Gateway age={this.state.adult}/></GatewayContainer>
        }
      </div>
    );
  }
}
