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

// import { MDBDataTable, MDBBtn } from 'mdbreact';
// import Update from '../updateprice';

// const Create = () => {


//   const data = {
//     columns: [
//       {
//         label: 'Name',
//         field: 'name',
//         sort: 'asc',
//         width: 150
//       },
//       {
//         label: 'Position',
//         field: 'position',
//         sort: 'asc',
//         width: 270
//       },
//       {
//         label: 'Office',
//         field: 'office',
//         sort: 'asc',
//         width: 200
//       },
//       {
//         label: 'Age',
//         field: 'age',
//         sort: 'asc',
//         width: 100
//       },
//       {
//         label: 'Start date',
//         field: 'date',
//         sort: 'asc',
//         width: 150
//       },
//       {
//         label: 'Salary',
//         field: 'salary',
//         sort: 'asc',
//         width: 100
//       }
//     ],
//     rows: [
//       {
//         name: 'Tiger Nixon',
//         position: 'System Architect',
//         office: 'Edinburgh',
//         age: '61',
//         date: '2011/04/25',
//         salary: '$320'
//       },
//       {
//         name: 'Garrett Winters',
//         position: 'Accountant',
//         office: 'Tokyo',
//         age: '63',
//         date: '2011/07/25',
//         salary: '$170'
//       },
//       {
//         name: 'Ashton Cox',
//         position: 'Junior Technical Author',
//         office: 'San Francisco',
//         age: '66',
//         date: '2009/01/12',
//         salary: '$86'
//       },
//       {
//         name: 'Cedric Kelly',
//         position: 'Senior Javascript Developer',
//         office: 'Edinburgh',
//         age: '22',
//         date: '2012/03/29',
//         salary: '$433'
//       },
//       {
//         name: 'Airi Satou',
//         position: 'Accountant',
//         office: 'Tokyo',
//         age: '33',
//         date: '2008/11/28',
//         salary: '$162'
//       },
//       {
//         name: 'Brielle Williamson',
//         position: 'Integration Specialist',
//         office: 'New York',
//         age: '61',
//         date: '2012/12/02',
//         salary: '$372'
//       },
//       {
//         name: 'Herrod Chandler',
//         position: 'Sales Assistant',
//         office: 'San Francisco',
//         age: '59',
//         date: '2012/08/06',
//         salary: '$137'
//       },
//       {
//         name: 'Rhona Davidson',
//         position: 'Integration Specialist',
//         office: 'Tokyo',
//         age: '55',
//         date: '2010/10/14',
//         salary: '$327'
//       },
//       {
//         name: 'Colleen Hurst',
//         position: 'Javascript Developer',
//         office: 'San Francisco',
//         age: '39',
//         date: '2009/09/15',
//         salary: '$205'
//       },
//       {
//         name: 'Sonya Frost',
//         position: 'Software Engineer',
//         office: 'Edinburgh',
//         age: '23',
//         date: '2008/12/13',
//         salary: '$103'
//       },
//       {
//         name: 'Jena Gaines',
//         position: 'Office Manager',
//         office: 'London',
//         age: '30',
//         date: '2008/12/19',
//         salary: '$90'
//       },
//       {
//         name: 'Quinn Flynn',
//         position: 'Support Lead',
//         office: 'Edinburgh',
//         age: '22',
//         date: '2013/03/03',
//         salary: '$342'
//       },
//       {
//         name: 'Charde Marshall',
//         position: 'Regional Director',
//         office: 'San Francisco',
//         age: '36',
//         date: '2008/10/16',
//         salary: '$470'
//       },
//       {
//         name: 'Haley Kennedy',
//         position: 'Senior Marketing Designer',
//         office: 'London',
//         age: '43',
//         date: '2012/12/18',
//         salary: '$313'
//       },
//       {
//         name: 'Tatyana Fitzpatrick',
//         position: 'Regional Director',
//         office: 'London',
//         age: '19',
//         date: '2010/03/17',
//         salary: '$385'
//       },
//       {
//         name: 'Michael Silva',
//         position: 'Marketing Designer',
//         office: 'London',
//         age: '66',
//         date: '2012/11/27',
//         salary: '$198'
//       },
//       {
//         name: 'Paul Byrd',
//         position: 'Chief Financial Officer (CFO)',
//         office: 'New York',
//         age: '64',
//         date: '2010/06/09',
//         salary: '$725'
//       },
   
//     ]
//   };

//   return (
//     <div className="card card-body">
//     <MDBDataTable
    
//       data={data}
//     />  
//     </div>
//   );
// }

// export default Create;