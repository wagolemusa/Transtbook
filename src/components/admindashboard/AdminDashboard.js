import React, { Component } from "react";



class ChartsPage extends Component {


render() {
    return (
      <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
        <div class="container-fluid">
  
          <a class="navbar-brand waves-effect" href="#" target="_blank">
            <strong class="blue-text">Easy Coach</strong>
          </a>
  
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
  
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link waves-effect" href="#">Create Price
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link waves-effect" href="https://mdbootstrap.com/docs/jquery/" target="_blank">About
                  MDB</a>
              </li>
              <li class="nav-item">
                <a class="nav-link waves-effect" href="https://mdbootstrap.com/docs/jquery/getting-started/download/"
                  target="_blank">Free
                  download</a>
              </li>
              <li class="nav-item">
                <a class="nav-link waves-effect" href="https://mdbootstrap.com/education/bootstrap/" target="_blank">Free
                  tutorials</a>
              </li>
            </ul>
  
            <ul class="navbar-nav nav-flex-icons">
              <li class="nav-item">
                <a href="https://www.facebook.com/mdbootstrap" class="nav-link waves-effect" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="nav-item">
                <a href="https://twitter.com/MDBootstrap" class="nav-link waves-effect" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="nav-item">
                <a href="https://github.com/mdbootstrap/bootstrap-material-design" class="nav-link border border-light rounded waves-effect"
                  target="_blank">
                    <i class="fab fa-asymmetrik"></i>ADMIN
                </a>
              </li>
            </ul>
  
          </div>
  
        </div>
      </nav>

  <div class="sidebar-fixed position-fixed">
    <div class="list-group list-group-flush">
      <a href="#" class="list-group-item active waves-effect">
        <i class="fas fa-chart-pie mr-3"></i>&nbsp;&nbsp;Dashboard
      </a>
      <a href="#" class="list-group-item list-group-item-action waves-effect">
        <i class="fas fa-user mr-3"></i>&nbsp;&nbsp;Admin Profile</a>

        <a href="#" class="list-group-item list-group-item-action waves-effect">
        <i class="fas fa-hand-holding-usd"></i>&nbsp;Payments</a>

      <a href="#" class="list-group-item list-group-item-action waves-effect">
      <i class="fas fa-user-check"></i>&nbsp;&nbsp;All Users</a>
        
      <a href="#" class="list-group-item list-group-item-action waves-effect">
      <i class="fab fa-searchengin"></i>&nbsp;&nbsp;Search Booker by Serial</a>

      <a href="#" class="list-group-item list-group-item-action waves-effect">
      <i class="fas fa-truck"></i>&nbsp;&nbsp;Search Booker by Day & Manth</a>

            <a href="#" class="list-group-item list-group-item-action waves-effect">
        <i class="fas fa-money-bill-alt mr-3"></i>&nbsp;&nbsp;Parcel Deliveries</a>

              <a href="#" class="list-group-item list-group-item-action waves-effect">
              <i class="fas fa-quran"></i>&nbsp;&nbsp;Passengers bookings</a>

        <a href="#" class="list-group-item list-group-item-action waves-effect">
        <i class="fab fa-acquisitions-incorporated"></i>&nbsp;&nbsp;Parcel InTransit</a>

                <a href="#" class="list-group-item list-group-item-action waves-effect">
                <i class="fab fa-angellist"></i>&nbsp;&nbsp;Parcel In Delivered</a>

        <a href="#" class="list-group-item list-group-item-action waves-effect">
        <i class="far fa-bell-slash"></i>&nbsp;&nbsp;Parcel In Canceled</a>

  </div>
  </div>
<br/>
  <main class="pt-5 mx-lg-5">

      <div class="container-fluid">

  <div class="card mb-4 wow fadeIn">

  <div class="card-body d-sm-flex justify-content-between">

    <h4 class="mb-2 mb-sm-0 pt-1">
      <a href="https://mdbootstrap.com/docs/jquery/" target="_blank">Home Page</a>
      <span>/</span>
      <span>Dashboard</span>
    </h4>
    <form class="d-flex justify-content-center">

      <input type="search" placeholder="Type your query" aria-label="Search" class="form-control" />
      <button class="btn btn-primary btn-sm my-0 p" type="submit">
        <i class="fas fa-search"></i>
      </button>
      </form>
</div>
</div>
  <div class="row">

      <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
      <div class="inforide">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-4 col-4 rideone">
              <img src="https://vignette.wikia.nocookie.net/nationstates/images/2/29/WS_Logo.png/revision/latest?cb=20080507063620"/>
          </div>
          <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
              <h4>Employee</h4>
              <h2>20</h2>
          </div>
        </div>
      </div>
  </div>

          <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
            <div class="inforide">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-4 col-4 ridetwo">
                    <img src="https://vignette.wikia.nocookie.net/nationstates/images/2/29/WS_Logo.png/revision/latest?cb=20080507063620"/>
                </div>
                <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                    <h4>Clients</h4>
                    <h2>120</h2>
                </div>
              </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
            <div class="inforide">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-4 col-4 ridetwo">
                    <img src="https://vignette.wikia.nocookie.net/nationstates/images/2/29/WS_Logo.png/revision/latest?cb=20080507063620"/>
                </div>
                <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                    <h4>Clients</h4>
                    <h2>120</h2>
                </div>
              </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
            <div class="inforide">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-4 col-4 ridetwo">
                    <img src="https://vignette.wikia.nocookie.net/nationstates/images/2/29/WS_Logo.png/revision/latest?cb=20080507063620"/>
                </div>
                <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                    <h4>Clients</h4>
                    <h2>120</h2>
                </div>
              </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
            <div class="inforide">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-4 col-4 ridetwo">
                    <img src="https://vignette.wikia.nocookie.net/nationstates/images/2/29/WS_Logo.png/revision/latest?cb=20080507063620"/>
                </div>
                <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                    <h4>Clients</h4>
                    <h2>120</h2>
                </div>
              </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
            <div class="inforide">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-4 col-4 ridetwo">
                    <img src="https://vignette.wikia.nocookie.net/nationstates/images/2/29/WS_Logo.png/revision/latest?cb=20080507063620"/>
                </div>
                <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                    <h4>Clients</h4>
                    <h2>120</h2>
                </div>
              </div>
            </div>
        </div>
        

        <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
            <div class="inforide">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-4 col-4 ridethree">
                    <img src="https://vignette.wikia.nocookie.net/nationstates/images/2/29/WS_Logo.png/revision/latest?cb=20080507063620"/>
                </div>
                <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                    <h4>Jobs</h4>
                    <h2>50</h2>
                </div>
              </div>
            </div>
        </div>
</div>
</div>

 


    
</main>
 </div>

  

    );
  }
}


export default ChartsPage;