import React, { Component, Fragment } from 'react';
import { MDBInput,MDBBtn } from "mdbreact";


class FormDetails extends Component{

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render(){
        const {values, handleChange } = this.props;

        return(
        <Fragment>            
            <div className="form-group">
            <MDBInput label="Parcel Name" 
                type="text" id="title"
                onChange={handleChange('title')}
                defaultValue={values.title}
                required/>

            <MDBInput label="pickup"
                type="text" id="pickup"
                onChange={handleChange('pickup')}
                defaultValue={values.pickup}
                required/>

            <MDBInput label="Destination" 
                type="text" id="destination"
                onChange={handleChange('destination')} 
                defaultValue={values.destination}
                required/>

            <MDBBtn color="primary" onClick={this.continue}>continue</MDBBtn>

           </div>

        </Fragment>
        )
    }
}

export default FormDetails