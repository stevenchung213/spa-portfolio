import React from 'react';

const NavBar = () => {

  const navBarStyle = {
    position: 'fixed',
    width: '100%',
    backgroundColor: 'black',
    opacity: '0.9',
    zIndex: 999999,
  };
  const name = {
    fontSize: '28px',
    fontFamily: 'Montserrat',
    cursor: 'pointer',
    color: 'white'
  };
  const rightSideBar = {
    textAlign: 'right',
  };
  const NavLinks = {
    color: 'white',
    fontSize: '18px'
  };
  const rightSideDropDown = {
    width: '200px',
    float: 'right',
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
            <a className="nav-link" href="#about" style={NavLinks}>ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#tech" style={NavLinks}>TECH</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio" style={NavLinks}>PORTFOLIO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" style={NavLinks}>CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;