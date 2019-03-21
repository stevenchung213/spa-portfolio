import React, {Component} from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import {BrowserRouter as Router} from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import posed from 'react-pose';
import SplitText from 'react-pose-text';


export default class Navbar extends Component {
  state = {
    isOpen: false,
    collapse1: false,
    collapseID: ''
  };

  toggleCollapse = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {

    const TextBox = posed.div({
      exit: {
        x: '-100%'
      },
      enter: {
        x: '0%',
        beforeChildren: true,
        staggerChildren: 85
      }
    });
    const charPoses = {
      exit: {opacity: 0},
      enter: {opacity: 1}
    };

    const navBarStyle = {
      position: 'fixed',
      opacity: '0.95',
      zIndex: 10000,
      width: '100%'
    };
    const name = {
      fontSize: '1.7rem',
      cursor: 'pointer',
      fontWeight: 800
    };
    const hamburgerMenu = {
      backgroundImage: 'url("https://s3-us-west-1.amazonaws.com/my.portfolio/hamburger_icon.webp")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '50% 80%',
      backgroundPosition: 'center'
    };

    return (
      <Router>
        <MDBNavbar color="white" scrolling scrollingNavbarOffset={10} expand="lg" style={navBarStyle} transparent >
          <MDBNavbarBrand style={name}>
            <AnchorLink href='#main'>
              <TextBox className="black-text" initialPose="exit" pose="enter" style={{fontWeight: 900}}>
                <SplitText charPoses={charPoses}>
                  STEVEN CHUNG
                </SplitText>
              </TextBox>
            </AnchorLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} aria-label="collapsedDropdown" style={hamburgerMenu}/>
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <AnchorLink href='#about-nav'>
                  <TextBox className="black-text" initialPose="exit" pose="enter" style={{fontWeight: 900}}>
                    <SplitText charPoses={charPoses}>
                      ABOUT
                    </SplitText>
                  </TextBox>
                </AnchorLink>
              </MDBNavItem>
              <MDBNavItem>
                <AnchorLink href='#tech-nav'>
                  <TextBox className="black-text" initialPose="exit" pose="enter" style={{fontWeight: 900}}>
                    <SplitText charPoses={charPoses}>
                      TECH
                    </SplitText>
                  </TextBox>
                </AnchorLink>
              </MDBNavItem>
              <MDBNavItem>
                <AnchorLink href='#projects-nav'>
                  <TextBox className="black-text" initialPose="exit" pose="enter" style={{fontWeight: 900}}>
                    <SplitText charPoses={charPoses}>
                      PORTFOLIO
                    </SplitText>
                  </TextBox>
                </AnchorLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBDropdown className="black-text">
                  <MDBDropdownToggle nav caret className="black-text">
                    <MDBIcon className="black-text" far icon="address-card fa-2x"/>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown">
                    <MDBDropdownItem target="_blank" rel="noopener noreferrer"
                                     href="https://www.linkedin.com/in/stevenchung-213"
                                     aria-label="navLinkedIn" style={{fontWeight: 600}}>
                      <MDBIcon fab icon="linkedin"/> LinkedIn
                    </MDBDropdownItem>
                    <MDBDropdownItem target="_blank" rel="noopener noreferrer"
                                     href="https://www.github.com/stevenchung213"
                                     aria-label="navGithub" style={{fontWeight: 600}}>
                      <MDBIcon fab icon="github"/> Github
                    </MDBDropdownItem>
                    <MDBDropdownItem target="_blank" rel="noopener noreferrer"
                                     href="mailto:stevechung.213@gmail.com"
                                     aria-label="navGmail" style={{fontWeight: 600}}>
                      <MDBIcon far icon="envelope"/> Gmail
                    </MDBDropdownItem>
                    <MDBDropdownItem target="_blank" rel="noopener noreferrer"
                                     href="https://s3-us-west-1.amazonaws.com/my.portfolio/steven_chung_resume.pdf"
                                     aria-label="navResume" style={{fontWeight: 600}}>
                      <MDBIcon icon="file-pdf"/> Résumé
                    </MDBDropdownItem>
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
