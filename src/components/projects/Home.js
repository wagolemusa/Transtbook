import React, { Component } from 'react'
import Dashboard from '../dashboard/Dashboard';
import AdminDashboard from '../admindashboard/AdminDashboard';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from '../auth/Signup';
import Signin from '../auth/Signin';
import send from '../dashboard/send';
import Navbar from '../layout/Navbar';
import book from '../dashboard/book';
import passenger from '../admindashboard/passenger';
import search from '../admindashboard/search';
import datesearch from '../admindashboard/datesearch';
import payments from '../admindashboard/payments';
import parcelorders from '../admindashboard/parcelorders';
import create_price from '../admindashboard/create_price';
import castomers from '../admindashboard/castomers';
import Update from '../admindashboard/updateprice';
import Sms from '../admindashboard/sms';

class Home extends Component{

     render(){
        return(
            <BrowserRouter>


        <div className="App">

            <Switch>

            <Route exact path='/' component={ Navbar } />
            <Route path='/send' component={ send } />
            <Route path='/signup' component={ Signup} />
            <Route path='/signin' component={ Signin } />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/adminDashboard' component={AdminDashboard} />
            <Route path='/book' component={book} />
            <Route path='/passenger' component={passenger} />
            <Route path='/search' component={search} />
            <Route path='/datesearch' component={datesearch} />
            <Route path='/payments' component={payments} />
            <Route path='/parcelorders' component={parcelorders} />
            <Route path='/create_price' component={create_price} />
            <Route path='/castomers' component={castomers} />
            <Route path='/sms' component={Sms} />
            <Route path='/:price_id' component={Update} />

            </Switch>

        </div>
        </BrowserRouter>

    // <div className="">
    // <Navbar />

    // </div>
        );
    }
}


export default Home;