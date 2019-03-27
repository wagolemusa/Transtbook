import React, { Component } from "react";
import "./index.css";
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Signup from './components/auth/Signup';
// import Signin from './components/auth/Signin';
import Home from './components/projects/Home';
// import send from './components/dashboard/send';


class App extends Component {
  render() {
    return (

        <div className="App">

          <Home />

          <br/>
          <br/>
          <br/>
          <br/>

        </div>


    );
  }
}

export default App;
