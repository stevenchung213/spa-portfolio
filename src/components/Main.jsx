import React, {Component} from 'react';
import User from './User.jsx';
import Gateway from './Gateway.jsx';
import styled from 'styled-components';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      init: true,
      guestName: '',
      isOpen: false,
      project: ''
    };
  }

  getUserName = (e) => {
    this.setState({guestName: e.target.value});
  };

  handleClick = () => {
    this.setState({init: true});
    this.forceUpdate();
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({init: true});
      this.forceUpdate();
    }
  };

  selectProject = (e) => {
    if (e === 'Su Casa') {
      this.setState({project: 'Su Casa'});
    }
    if (e === 'Zillwoah!') {
      this.setState({project: 'Zillwoah!'});
    }
    if (e === 'My Map Pins') {
      this.setState({project: 'My Map Pins'});
    }
    if (e === 'GitHub Repos') {
      this.setState({project: 'GitHub Repos'});
    }

    this.setState({isOpen: true})
  };

  deSelectProject = () => {
    this.setState({project: ''});
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  componentDidMount() {
    let about = document.getElementById('about-container');
    if (about && location.href.includes('#about-container')) {
      about.scrollIntoView({
        // optional params
        behaviour: 'smooth',
        block: 'start',
        inline: 'center'
      });
    }
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
        <User onClick={this.handleClick} getUserName={this.getUserName} onEnterKey={this.handleKeyPress}/>
        }
        {this.state.init &&
        <GatewayContainer>
          <Gateway user={this.state.guestName}
                   projectSelected={this.state.isOpen}
                   clickProject={this.selectProject}
                   deSelectProject={this.deSelectProject()} />
        </GatewayContainer>
        }
      </div>
    );
  }
}
