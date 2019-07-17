import React, { Component } from "react";
import delivery from './delivery.png'
import Allusers from './all_users';
import Slide from './render/slide';

class ChartsPage extends Component {


render() {
    return (
<div className="musa">
<nav class="navbar navbar-expand navbar-dark warning-color-dark static-top">

    <a class="navbar-brand mr-1" href="/"><img src={delivery} alt="refuge" width="100"></img></a>

 
    <ul class="navbar-nav ml-auto ml-md-0">
    <i class="fab fa-btc"></i>&nbsp;&nbsp; <a href="/castomers">Clients</a>  &nbsp;&nbsp;&nbsp;&nbsp;

    <i class="far fa-calendar-plus"></i>&nbsp;&nbsp; <a href="/create_price">Create Price</a>  &nbsp;&nbsp;&nbsp;&nbsp;

<i class="fas fa-sign-out-alt"></i> &nbsp;&nbsp;<a href="#">Logout</a>  
   
    </ul>
</nav>

<Slide/>
 
<div className="container">
<br/>
    <div class="row">
      <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-primary o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-fw fa-comments"></i>
            </div>
            <div class="mr-5">Today's OnlineBookings 37</div>
          </div>
          <a class="card-footer text-white clearfix small z-1" href="#">
            <span class="float-left">View Details</span>
            <span class="float-right">
              <i class="fas fa-angle-right"></i>
            </span>
          </a>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-warning o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-fw fa-list"></i>
            </div>
            <div class="mr-5">Today's Parcel Orders 6</div>
          </div>
          <a class="card-footer text-white clearfix small z-1" href="#">
            <span class="float-left">View Details</span>
            <span class="float-right">
              <i class="fas fa-angle-right"></i>
            </span>
          </a>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-success o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-fw fa-shopping-cart"></i>
            </div>
            <div class="mr-5">Today's Desk Clients 8</div>
          </div>
          <a class="card-footer text-white clearfix small z-1" href="#">
            <span class="float-left">View Details</span>
            <span class="float-right">
              <i class="fas fa-angle-right"></i>
            </span>
          </a>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-danger o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-fw fa-life-ring"></i>
            </div>
            <div class="mr-5">13 Payments Failed issues</div>
          </div>
          <a class="card-footer text-white clearfix small z-1" href="#">
            <span class="float-left">View Details</span>
            <span class="float-right">
              <i class="fas fa-angle-right"></i>
            </span>
          </a>
          </div>
        </div>
      </div>
      </div>
      <hr/>
      <div class="row">
    <div class="col col-md-8">
      .col .col-md-8
    </div>
    <div class="col-6 col-md-4">
    <Allusers/>
    </div>
  </div>


  </div>
 
  
    );
  }
}


export default ChartsPage; 