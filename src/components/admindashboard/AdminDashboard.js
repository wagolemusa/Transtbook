import React, { Component } from "react";
import delivery from './delivery.png'


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


<div class="row">
    <ul class="sidebar navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="/passenger">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Passengers bookings</span>
      </a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="/search">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Search Passengers</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/datesearch">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Search By Date</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/payments">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Payments</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/parcelorders">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Parcel Delivery Orders</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="charts.html">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Parcel InTransit</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="charts.html">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Parcel Delivered</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="charts.html">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Parcel Canceled</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="charts.html">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Charts</span></a>
    </li>   
    <li class="nav-item">
      <a class="nav-link" href="tables.html">
        <i class="fas fa-fw fa-table"></i>
        <span>Tables</span></a>
    </li>
  </ul>

  
<div class="col-md-10">
<br/>
    <div class="row">
      <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-primary o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-fw fa-comments"></i>
            </div>
            <div class="mr-5">26 New Messages!</div>
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
            <div class="mr-5">11 New Tasks!</div>
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
            <div class="mr-5">123 New Orders!</div>
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
            <div class="mr-5">13 New Tickets!</div>
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
  </div>
  </div>
 
  
    );
  }
}


export default ChartsPage; 