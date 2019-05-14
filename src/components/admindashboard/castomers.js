import React, {Component} from 'react';

import AdminNav from './adminNav';
import Create from './render/create';
import { MDBContainer,MDBInput,  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


let token = localStorage.getItem('access_token')
// let current_user = localStorage.getItem('current_user')
let access_token = "Bearer " + token

class Castomer extends Component{

    state = {
        customer_name: '',
        customer_number: '',
        from_location: '',
        to_location: '',
        quantiy: '',
        price: '',
        phone: '',
        date_when: '',
        time_at: ''
    }

    handleChange = (e) => {
        this.setState({
            [ e.target.id ]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        fetch('https://senditparcel.herokuapp.com/api/admin/v2/create/passenger',{
        method: 'POST',
        body: JSON.stringify(this.state),
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': access_token
        }

        })
        .then((res)=> res.json())
        .then((data) =>{
            document.getElementById("sms").InnerText = data["message"]
        })
        .catch(error => console.log('error:', error))
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
      <MDBBtn onClick={this.toggle}>ADD CLIENTS</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Create Prices</MDBModalHeader>
        <div id="sms"></div>
        <MDBModalBody>
            <form onSubmit={this.handleSubmit}>
                <MDBInput label="Customer Name" type="text" id="customer_name" onChange={this.handleChange} required/>
                <MDBInput label="Customer Number" type="number" id="customer_number" onChange={this.handleChange} required/>
                <MDBInput label="From" type="text" id="from_location" onChange={this.handleChange} required/>
                <MDBInput label="To" type="text" id="to_location" onChange={this.handleChange} required/>
                <MDBInput label="How Many Seats" type="number" id="quantiy" onChange={this.handleChange} required/>
                <MDBInput label="Price" type="number" id="price" onChange={this.handleChange} required/>
                <MDBInput label="Lipa Na Mpesa phone" type="number" id="phone" onChange={this.handleChange} required/>
                <MDBInput label="When Are You Traveling" type="date" id="date_when" onChange={this.handleChange} required/>
                <MDBInput label="What Time Are You Traveling" type="time" id="time_at" onChange={this.handleChange} required/>


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

export default Castomer;