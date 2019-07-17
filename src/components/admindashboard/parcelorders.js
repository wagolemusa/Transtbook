import React, { Component } from 'react';

import AdminNav from './adminNav';
import Slide from './render/slide';


class Parcelorders extends Component {

    render(){
        return(
            <div>
                <AdminNav/>
                <Slide/>
                <h2>Parcel Orders</h2>
            </div>
        )
    }
}


export default Parcelorders;