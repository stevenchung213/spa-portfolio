import React, {Component} from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import {BrowserRouter as Router} from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {

    const navBarStyle = {
      position: 'fixed',
      backgroundColor: 'black',
      opacity: '0.7',
      zIndex: 100,
      width: '100%'
    };
    const name = {
      fontSize: '28px',
      fontFamily: 'Montserrat !important',
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
      <Router>
        <MDBNavbar color="black" dark scrolling scrollingNavbarOffset={10} expand="md" style={navBarStyle} transparent>
          <MDBNavbarBrand style={name}>
            <strong className="white-text">STEVEN CHUNG</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse}/>
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="#about-container">ABOUT</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#tech">TECH</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#projects">PROJECTS</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user"/>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown">
                    <MDBDropdownItem href="https://www.linkedin.com/in/stevenchung-213">
                      <MDBIcon fab icon="linkedin"/>  LinkedIn
                    </MDBDropdownItem>
                    <MDBDropdownItem href="https://www.github.com/stevenchung213">
                      <MDBIcon fab icon="github"/>  Github
                    </MDBDropdownItem>
                    <MDBDropdownItem href="mailto:stevechung.213@gmail.com">
                      <MDBIcon far icon="envelope"/>  Gmail
                    </MDBDropdownItem>
                    <MDBDropdownItem href="https://s3-us-west-1.amazonaws.com/my.portfolio/sc_resume.pdf">
                      <MDBIcon icon="file-pdf"/>  Résumé
                    </MDBDropdownItem>
                    {/*<MDBDropdownItem href="#!"></MDBDropdownItem>*/}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}


// const NavBar = () => {
//
//
//   return (
//     <nav className="navbar navbar-expand-md navbar-light" style={navBarStyle}>
//       <a className="navbar-brand" href="#top" style={name}>STEVEN CHUNG</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent" style={rightSideBar}>
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item">
//             <a className="nav-link" href="#about" style={NavLinks}>ABOUT</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#tech" style={NavLinks}>TECH</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#portfolio" style={NavLinks}>PORTFOLIO</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#contact" style={NavLinks}>CONTACT</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   )
// };
//
// export default NavBar;