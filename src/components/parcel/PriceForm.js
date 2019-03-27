import React, { Component, Fragment } from 'react';
import { MDBInput,MDBBtn } from "mdbreact";


class PriceForm extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    // pay = () =>{
    //     this.state.cash  = this.state.weight * 150
    // }

    render(){
        const {values, handleChange } = this.props;

        return(
        <Fragment>            
            <div className="form-group">
            <MDBInput label="Parcel Weight" 
                type="number" id="weight" 
                onChange={handleChange('weight')} 
                defaultValue={values.weight}
                required/>

      <MDBInput label = { values.weight * 150 }
                className="disabled"
                type="number" id="cash"
                onChange={handleChange('cash')}
                defaultValue={values.cash}
                required/>


            <MDBInput label="Your Phone Number"
                type="text" id="phone" 
                onChange={handleChange('phone')} 
                defaultValue={values.phone}
                required/>

            <MDBBtn color="primary" onClick={this.continue}>Continue</MDBBtn>
            <MDBBtn  onClick={this.back} >Back</MDBBtn>


           </div>

        </Fragment>
        )
    }
}

export default PriceForm