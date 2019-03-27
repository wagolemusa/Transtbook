import React, { Component, Fragment } from 'react';
import { MDBInput,MDBBtn } from "mdbreact";


class ReciverDetails extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render(){
        const {values, handleChange } = this.props;

        return(
        <Fragment>            
            <div className="form-group">
            <MDBInput label="Reciever Name" 
                type="text" id="rec_name" 
                onChange={handleChange('rec_name')} 
                defaultValue={values.rec_name}
                required/>

            <MDBInput label="Reciever Phone Number" 
                type="number" id="rec_phone" 
                onChange={handleChange('rec_phone')} 
                defaultValue={values.rec_phone}
                required/>

            <MDBInput label="Reciever ID"
                type="number" id="rec_id" 
                onChange={handleChange('rec_id')} 
                defaultValue={values.rec_id}
                required/>

            <MDBBtn color="primary" onClick={this.continue}>Continue</MDBBtn>
            <MDBBtn  onClick={this.back} >Back</MDBBtn>


           </div>

        </Fragment>
        )
    }
}

export default ReciverDetails