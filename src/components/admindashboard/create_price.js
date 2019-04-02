import React, { Component } from 'react'
import { MDBContainer } from 'mdbreact';

let token = localStorage.getItem('access_token')
// let current_user = localStorage.getItem('current_user')
let access_token = "Bearer " + token

class Price extends Component {

    state = {
        car_number: '',
        from_location: '',
        to_location: '',
        period: '',
        arrival: '',
        price: '',
        day_time: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        fetch('https://senditparcel.herokuapp.com/api/admin/v2/locations',{
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
                // window.location.replace("create_price.html")
        })
        .catch(error => console.log('error:', error));
    }

    render(){
        return(
          <MDBContainer>
            

          </MDBContainer>
        )
    }
}

export default Price