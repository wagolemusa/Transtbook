import React, { Component } from 'react'
import { MDBInput } from 'mdbreact';

let token = localStorage.getItem('access_token')
// let current_user = localStorage.getItem('current_user')
let access_token = "Bearer " + token

class EmailSend extends Component{

    state = {
        message: ''
    }
    hendleChange = (e) =>{
        this.setState({
            [e.terget.id]: e.terget.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://senditparcel.herokuapp.com/api/admin/v2/send/email/notification',{
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
                     <label for="exampleFormControlTextarea6">Shadow and placeholder</label>
                    <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write Message  here..."
                        id="message" onChange={this.handleChange} required ></textarea>
                    </div>
                    <button class="btn btn-primary">Send Massage</button> 

                </form>
            </div>

        )
    }
}

export default EmailSend