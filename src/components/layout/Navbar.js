import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, } from 'mdbreact';

class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
          collapse: false,
          isWideEnough: false
        };
        this.onClick = this.onClick.bind(this);
      }
    
      onClick() {
        this.setState({
          collapse: !this.state.collapse
        });
      }

  render() {
    return (
        <div>
            <header>
                <MDBNavbar color="warning-color-dark" dark expand="md" fixed="top">
                <MDBNavbarBrand href="/">
                    <strong>Navbar</strong>
                </MDBNavbarBrand>
                {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav right>
                    <MDBNavItem active>
                        <MDBNavLink to='/'>Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to='/signup'>SignUp</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to='/signin'>Login</MDBNavLink>
                    </MDBNavItem>

            
                    </MDBNavbarNav>
                </MDBCollapse>
                </MDBNavbar>

        </header>
    </div>
    );
  }
}
export default Navbar;