import React, { Component } from 'react';
import AdminNav from './adminNav';
import Slide from './render/slide';

class Datesearch extends Component{

    render(){
        return(
            <div>
                <AdminNav/>
                <Slide/>
                <h3>Search passengers by Unique Number</h3>
            </div>
        )
    }
}

export default Datesearch;