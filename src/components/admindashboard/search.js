import React, { Component } from 'react';
import AdminNav from './adminNav';
import Slide from './render/slide';

class Search extends Component{

    render(){
        return(
            <div>
                <AdminNav/>
                <Slide/>
                <h1>Search Passenger</h1>
            </div>
        )
    }
}

export default Search;