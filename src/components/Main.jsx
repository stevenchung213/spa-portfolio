import React, {Component} from 'react';
import NavBar from "./NavBar.jsx";


export default class Main extends Component {
  constructor () {
    super();

    this.state = {
      view: ''
    };
  }

  handleClick = () => {
    console.log('hi');
  };

  render () {
    return (
      <div id="main-container">
        <NavBar/>

      </div>
    );
  }
}
