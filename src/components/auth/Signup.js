import React, { Component } from 'react';

import { MDBInput, MDBContainer } from "mdbreact";

class Signup extends Component {



    render(){
        return (
            <MDBContainer>
                <MDBInput label="First Name" type="text"  icon="signature" />
                <MDBInput label="Last Name" type="text"  icon="signature" />
                <MDBInput label="Phone Number" type="number"  icon="phone-volume" />
                <MDBInput label="Username" type="text"  icon="user" />
                <MDBInput label="Email" type="email" icon="at" />
                <MDBInput label="Password" type="password" icon="key" />
                <MDBInput label="Re-password" type="password" icon="key" />


            </MDBContainer>
        )
    }


}
export default Signup 