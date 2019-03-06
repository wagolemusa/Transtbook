import React, { Component } from "react";
import "./index.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Home from './components/projects/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">

          <Navbar />

          <br/>
          <br/>
          <br/>
          <br/>

        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/signup' component={ Signup} />
          <Route path='/signin' component={ Signin } />
        </Switch>


        </div>


      </BrowserRouter>
    );
  }
}

export default App;
