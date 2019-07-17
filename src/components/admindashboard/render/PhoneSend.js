import React, { Component } from 'react'
import { MDBInput } from 'mdbreact';

let token = localStorage.getItem('access_token')
// let current_user = localStorage.getItem('current_user')
let access_token = "Bearer " + token

class PhoneSend extends Component{

    state = {
        message: ''
    }
    handleChange = (e) => {
        this.setState({
            [ e.target.id ]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://senditparcel.herokuapp.com/api/admin/v2/sendmessage',{
            method:'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':access_token
            }
        })
        .then((res)=> res.json())
        .then((data) => {
            console.log(data)
            document.getElementById("msg").innerText = data["message"]
                window.location.replace("sms")
        })
        .catch(error => console.log('error:', error));
    }

    
    render(){
        return (
            
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group shadow-textarea">

                     <label for="exampleFormControlTextarea6">Send Message to all users</label>
                    <textarea class="form-control z-depth-1"  rows="3"
                        id="message" onChange={this.handleChange} required 
                        placeholder="Write Message  here..." >
                    </textarea>
                    </div>
                    <button class="btn btn-primary">Send SMS On Phones</button> 

                </form>
            </div>

        )
    }
}

export default PhoneSend