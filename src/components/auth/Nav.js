import React from 'react';
import { MDBBreadcrumb,MDBNavLink } from "mdbreact";

import delivery from './delivery.png'


const Nav  = () =>{
    return (
        <MDBBreadcrumb light color="warning-color-dark">
          <MDBNavLink Link to="/">
                <img src={delivery} alt="refuge" width="100"></img>

          </MDBNavLink>
         
        </MDBBreadcrumb>

    )
}

export default Nav;