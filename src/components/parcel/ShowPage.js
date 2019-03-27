import React, { Component } from 'react';
import { MDBBtn,MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

let token = localStorage.getItem('access_token')
let current_user = localStorage.getItem('current_user')
let access_token = "Bearer " + token

class ShowPage extends Component{

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.props);
        fetch ('https://senditparcel.herokuapp.com/api/v2/parcels',{
            method: 'POST',
            body: JSON.stringify(this.props.values),
            headers: {
                'Content-Type' : 'application/json',
                "Accept":"application/json",
                "Authorization":access_token
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data)
            document.getElementById("error").innerHTML = data["message"]
        })
        .catch(error => console.log('error:', error));
    }

    render(){
        const {values: {title, pickup, rec_id, rec_phone, rec_name, destination, weight, cash, phone } }  = this.props;
        return (
            <MDBContainer>
            <MDBListGroup style={{ width: "22rem" }}>
            <div id="error"></div>
                <form onSubmit={this.handleSubmit} className="white">
                <MDBListGroupItem>{title}</MDBListGroupItem>
                <MDBListGroupItem>{pickup}</MDBListGroupItem>
                <MDBListGroupItem>{rec_id}</MDBListGroupItem>
                <MDBListGroupItem>{rec_phone}</MDBListGroupItem>
                <MDBListGroupItem>{rec_name}</MDBListGroupItem>
                <MDBListGroupItem>{destination}</MDBListGroupItem>
                <MDBListGroupItem>{weight}</MDBListGroupItem>
                <MDBListGroupItem>{cash}</MDBListGroupItem>
                <MDBListGroupItem>{phone}</MDBListGroupItem>
                <button className="btn pink lighten-1 z-depth-0">Send parcel</button>   
                <MDBBtn  onClick={this.back} >Back</MDBBtn>
            </form>
            </MDBListGroup>
            </MDBContainer>
            
            );
    }
};

export default ShowPage