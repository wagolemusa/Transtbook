import React, { Component } from 'react'
import AdminNav from './adminNav';
import Create from './render/create';
import { MDBContainer,MDBInput,  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


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
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
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
                window.location.replace("create_price")
        })
        .catch(error => console.log('error:', error));
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
      

    render(){
        return(
            <div>
            <AdminNav/>
            <div className="container">
     <MDBContainer>
      <MDBBtn onClick={this.toggle}>ADD LOCATION</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Create Prices</MDBModalHeader>
        <div id="msg"></div>
        <MDBModalBody>
        <form onSubmit={this.handleSubmit}>
                <MDBInput label="Car Number" type="number" id="car_number" onChange={this.handleChange} required/>
                <MDBInput label="From" type="text" id="from_location" onChange={this.handleChange} required/>
                <MDBInput label="To" type="text" id="to_location" onChange={this.handleChange} required/>
                <MDBInput label="Day" type="text" id="period" onChange={this.handleChange} required/>
                <MDBInput label="Arrival" type="time" id="arrival" onChange={this.handleChange} required/>
                <MDBInput label="Price" type="number" id="price" onChange={this.handleChange} required/>
                <MDBInput label="Time" type="time" id="day_time" onChange={this.handleChange} required/>
                <button class="btn btn-primary">Create</button> 

                </form>  
                 </MDBModalBody>
       
      </MDBModal>
    </MDBContainer>
           
      
         
            <Create/>
            </div>

            
         </div>
        )
    }
}


export default Price

