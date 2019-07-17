import React, { Component } from 'react';
import AdminNav from './adminNav';
import Slide from './render/slide';


class Passenger extends Component {

    render(){
        return (
            <div>
            <AdminNav />
            <Slide/>
            <h1>refuge wise</h1>
            </div>
        );
    }
}

export default Passenger;