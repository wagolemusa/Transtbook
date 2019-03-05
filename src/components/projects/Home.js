import React, { Component } from 'react'

import { MDBView, MDBMask  } from 'mdbreact';

class Home extends Component{

    render(){
        return(


        <MDBView src="http://photos.wikimapia.org/p/00/02/53/60/61_big.jpg">
         <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
              <h1>Book and travel, Or send Parcel</h1>
              <h5>The Guardian Coach Bus Service provides travelers with genuine comfort they deserve;from booking to when the passengers board the bus. Travelers will not need to go all the way to booking offices</h5>
              <br />
              <p>All payments are done Via Mpesa</p>
            </MDBMask>
          </MDBView> 
        );
    }
}


export default Home;