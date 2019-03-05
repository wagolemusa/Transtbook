import React, { Component } from 'react';

import { MDBInput, MDBContainer } from 'mdbreact';

class Signin extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
    }


    render(){
        
        return(
            <MDBContainer>
                <form onSubmit={this.handleSubmit} className="white">
                     <MDBInput label="Username" type="text" id="username" onChange={this.handleChange} icon="user" />
                    <MDBInput label="Password" type="password" id="password" onChange={this.handleChange} icon="key" />
                    <button className="btn pink lighten-1 z-depth-0">Sign In</button>   

                </form>
            </MDBContainer>
        )

    }
    
}

export default Signin
