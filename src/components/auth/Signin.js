import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


import { MDBInput, MDBContainer, ToastContainer, toast } from 'mdbreact';
import Nav from './Nav';

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
                        window.location.replace("../admindashboard/AdminDashboard")

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


notify(type){
    return () => {
        toast.success('message', {
        position: "top-right",
    })
}
}

// toast.success(this.loginMsg, {
//     position: "top-right",
// })

    render(){
        
        return(
            <div>
            <Nav/>
            <MDBContainer>
            <div class="card"> 
                <h2>Login</h2>

                <div className="form-group">
                <Fragment>
                <strong id="loginMsg"></strong>
                <ToastContainer
                    hideProgressBar={true}
                    newestOnTop={true}
                    autoClose={5000}
                />
                </Fragment>
                <div ></div>
                <form onSubmit={this.handleSubmit} className="white">
                     <MDBInput label="Username" type="text" id="username" onChange={this.handleChange} icon="user" required/>
                    <MDBInput label="Password" type="password" id="password" onChange={this.handleChange} icon="key" required/>
                    <button className="btn pink lighten-1 z-depth-0" onClick={this.notify('success')}>Sign In</button>   
                    <Link to='/signup'>Don't have an account? Sign up</Link>
                </form>
            </div>

        </div>
            </MDBContainer>
        </div>
            
        )

    }
    
}

export default Signin
