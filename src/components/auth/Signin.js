import React, { Component } from 'react';

import { MDBInput, MDBContainer, MDBAlert } from 'mdbreact';

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
        
        // console.log(this.state);
        fetch('https://senditparcel.herokuapp.com/api/v2/auth/signin',{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response)=> response.json())
        .then((data)=>{

            localStorage.setItem('access_token', data.access_token)
            localStorage.setItem('current_user', this.state.username)

            if (data.access_token){

                if(data.access_token){
                    if(this.state.username == "admin"){

                        window.location.replace("admin_dashboard")
                    }else{
                        window.location.replace("../dashboard/Dashboard")
            }
        }
    }
    else {
        document.getElementById("loginMsg").innerText = data["message"];
        console.log(data["message"]);
    }
})
.catch(error => console.log('error:', error));

}


    render(){
        
        return(
            <MDBContainer>
                <div className="form-group">
                    <MDBAlert aria-hidden="true" color="warning" dismiss>
                    <strong id="loginMsg"></strong>
                </MDBAlert>
                <div ></div>
                <form onSubmit={this.handleSubmit} className="white">
                     <MDBInput label="Username" type="text" id="username" onChange={this.handleChange} icon="user" required/>
                    <MDBInput label="Password" type="password" id="password" onChange={this.handleChange} icon="key" required/>
                    <button className="btn pink lighten-1 z-depth-0">Sign In</button>   

                </form>
            </div>
            </MDBContainer>
        )

    }
    
}

export default Signin
