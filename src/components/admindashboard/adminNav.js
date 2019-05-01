import React from 'react';   
import delivery from './delivery.png';

const AdminNav = () =>{
    return (
    <nav class="navbar navbar-expand navbar-dark warning-color-dark static-top">

        <a class="navbar-brand mr-1" href="/AdminDashboard"><img src={delivery} alt="refuge" width="100"></img></a>


        <ul class="navbar-nav ml-auto ml-md-0"> 
        <i class="far fa-calendar-plus"></i> &nbsp;&nbsp;<a href="/AdminDashboard">Dashboard</a> &nbsp;&nbsp;
        &nbsp;&nbsp;<i class="fas fa-sign-out-alt"></i>&nbsp;&nbsp;<a href="#">Logout</a>  

        </ul>
    </nav>

    )
}
export default AdminNav;