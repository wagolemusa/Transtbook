import React, { Component } from 'react';

import { MDBInput, MDBContainer } from 'mdbreact';

class Signin extends Component {



    render(){
        
        return(
            <MDBContainer>

                <MDBInput label="username" icon="user" />
                <MDBInput label="passward" icon="key" />
                
            </MDBContainer>
        )

    }
    
}

export default Signin
