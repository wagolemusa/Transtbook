import React, { Component } from 'react';

import { MDBInput, MDBContainer} from "mdbreact";

class Signup extends Component {

    state = {
        first_name: '',
        last_name: '',
        username: '',
        phone: '',
        email: '',
        password: '',
        confirm_password:''

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state);
        fetch('https://senditparcel.herokuapp.com/api/v2/auth/signup',{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res)=>res.json())
        .then((data) =>{
            if (data){
                document.getElementById("reg").innerText = data["message"];
    
            }else{
                window.location.replace("Signin")        
    
            }
    })
    .catch(error => console.log('error:',error));

    }


    render(){
        return (
            <MDBContainer>
                <div id="reg"></div>
                <form onSubmit={this.handleSubmit} className="white">
                    <MDBInput label="First Name" type="text" id="first_name" onChange={this.handleChange} icon="signature" />
                    <MDBInput label="Last Name" type="text" id="last_name" onChange={this.handleChange} icon="signature" />
                    <MDBInput label="Phone Number" type="number" id="phone" onChange={this.handleChange}  icon="phone-volume" />
                    <MDBInput label="Username" type="text" id="username" onChange={this.handleChange} icon="user" />
                    <MDBInput label="Email" type="email" id="email" onChange={this.handleChange} icon="at" />
                    <MDBInput label="Password" type="password" id="password" onChange={this.handleChange} icon="key" />
                    <MDBInput label="Confirm password" type="password" id="confirm_password" onChange={this.handleChange} icon="key" />
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>   
                 </form>

            </MDBContainer>
        )
    }


}
export default Signup 