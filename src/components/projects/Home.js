import React, { Component } from 'react'
import Dashboard from '../dashboard/Dashboard';
import AdminDashboard from '../admindashboard/AdminDashboard';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from '../auth/Signup';
import Signin from '../auth/Signin';
import send from '../dashboard/send';
import Navbar from '../layout/Navbar';
import book from '../dashboard/book';


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