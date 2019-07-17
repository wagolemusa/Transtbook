import React, { Component } from 'react';
import AdminNav from './adminNav';
import Slide from './render/slide';


class Payments extends Component{

    render(){
        return(

            <div>
                <AdminNav/>
                <Slide/>

                <h1>Passengers Payments </h1>
            </div>
        )
    }
}

export default Payments;