import React, { Component } from 'react'
import { Link } from 'react-router-dom'

let token = localStorage.getItem('access_token')
let current_user = localStorage.getItem('current_user')
let access_token = "Bearer " + token

class Create extends Component {

  state = {
    posts: [ ]
  }

  componentDidMount(){
  fetch('https://senditparcel.herokuapp.com/api/admin/v2/locations',{
      method: 'GET',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization":access_token
      },
    })
      .then((res)=>res.json())
      .then((res)=>{
        this.setState({
          posts: res.collection
        })
      })
}

  render(){

    const { posts } = this.state;
    // const postList = posts.length ? (

    const postList = [
      <div className="">
<table class="table">
  <thead>
    <tr>
      <th scope="col">Serial Number</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Price</th>
      <th scope="col">Arrival</th>
      <th scope="col">Period</th>
      <th scope="col">Time</th>
      <th scope="col">Update</th>


    </tr>
  </thead>
  </table>
</div>,
   
 
      posts.map(post => {
        console.log(post)
       return(
          // should be table
          <table class="table">

          <tbody>
            <tr>
          <div className key={post.price_id}> 
          <td width="30%">{post.car_number}</td>
          <td width="17%">{post.from_location}</td>
          <td width="15%">{post.to_location}</td>
          <td width="10%">{post.price}</td>
          <td width="11%">{post.arrival}</td>
          <td width="11%">{post.period}</td>
          <td width="10%"> {post.day_time}</td>
          
          <Link to={'/' + post.price_id}>
          <td width="10%">Update</td>
          </Link>


          </div>
          </tr>
          </tbody>
          </table>
       )
      
      })

     ]
    // ) : (
    //   <h1>No Posts yet</h1>
    // )
    return (
      <div>
      {postList}
      </div>
    )
  }
}


export default Create;
