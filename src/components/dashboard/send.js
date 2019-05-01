import React, { Component }  from 'react'

import FormDetails from '../parcel/FormDetails';
import PriceForm from '../parcel/PriceForm';
import ReciverDetails from '../parcel/ReciverDetails';
import ShowPage from '../parcel/ShowPage';
import Sucess from '../parcel/Sucess';
import Back from './back';


class Sentparcel extends  Component{

    state = {
        step:1,
        title: '',
        pickup: '',
        rec_id: '',
        rec_phone: '',
        rec_name: '',
        destination: '',
        weight: '',
        cash: '',
        phone: ''
    }


    // proced to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })   
    }
    // proced backwords
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })   
    }

    // handle on submit by ID
    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.id]: e.target.value
    //     })
    // }

    // Handle fields change
    handleChange = input => e =>{
        this.setState({[input]: e.target.value});
    }

    render(){
        const { step } = this.state;
        const {title, pickup, rec_id, rec_phone, rec_name, destination, weight, cash, phone } = this.state;
        const values = {title, pickup, rec_id, rec_phone, rec_name, destination, weight, cash, phone }
        
        switch(step){
            case 1:
                return (
                <div>
                    <Back />
                    <div className="container">
                    <div class="card card-body">
                    <h2><strong>Send Parcel Datails</strong></h2>
                    <FormDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                </div>
                </div>
                </div>

                );
            case 2:
                return (
                    <div>
                    <Back />
                    <div className="container">
                    <div class="card card-body">
                    <h2><strong>Send Parcel Datails</strong></h2>
                    <ReciverDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
                </div>
                </div>
                </div>
            );
            
            case 3:
                return(
                    <div>
                    <Back />
                    <div className="container">
                    <div class="card card-body">
                    <h2><strong>Send Parcel Datails</strong></h2>
                    <PriceForm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                    </div>
                    </div></div>
            );

            case 4:
                return (
                    <div>
                    <Back />
                    <div className="container">
                    <div class="card card-body">
                    <h2><strong>All Parcel Datails</strong></h2>
                    <ShowPage
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                    </div>
                    </div></div>
                );

            case 5:
                return (
                    <div>
                    <Back />
                    <div className="container">
                    <div class="card card-body">
                    <h2><strong>Thanks for using our sercives</strong></h2>

                    <Sucess 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    
                    />
                    </div>
                    </div></div>
                );

            default:
                return(

                    <h2>refuge wise</h2>
                ) 

        }
        

    }

}



export default Sentparcel