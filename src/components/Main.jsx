import React, {Component} from 'react';
import User from './User.jsx';
import Gateway from './Gateway.jsx';
import styled from 'styled-components';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      init: false,
      guestName: '',
      view: ''
    };
  }

  getUserName = (el) => {
    this.setState({guestName: el.target.value});
  };

  handleClick = (el) => {
    this.setState({init: true});
    this.forceUpdate();
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  render() {

    const general = {
      height: '100vh',
      backgroundColor: 'black',
      fontFamily: 'Montserrat, serif',
    };
    const GatewayContainer = styled.div`
      background-color: black;
      height: 100vh;
    `;

    return (
      <div id="main-container" style={general}>
        {!this.state.init &&
          <User onClick={this.handleClick} getUserName={this.getUserName}/>
        }
        {this.state.init &&
        <GatewayContainer>
          <Gateway user={this.state.guestName}/>
        </GatewayContainer>
        }
      </div>
    );
  }
}
