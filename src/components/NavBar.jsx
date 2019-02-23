import React from 'react';

const NavBar = () => {

  const navBarStyle = {
    position: 'fixed',
    width: '100%',
    backgroundColor: 'white',
    zIndex: 999999
  };

  const name = {
    fontSize: '22px',
    fontFamily: 'Montserrat',
    color: '#343a40',
    cursor: 'pointer'
  };

  const rightSideBar = {
    textAlign: 'right'
  };

  const rightSideDropDown = {
    width: '200px',
    float: 'right',
  };

  const pointer = {
    fontFamily: 'Montserrat',
    color: '#343a40',
    cursor: 'pointer'
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light" style={navBarStyle}>
      <a className="navbar-brand" href="#top" style={name}>STEVEN CHUNG</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={rightSideBar}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#about" >ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#tech" >TECH</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio" >PORTFOLIO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" >CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;