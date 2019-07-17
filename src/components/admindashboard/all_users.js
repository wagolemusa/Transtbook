import React, { Component } from 'react'

import Colaps  from './render/Colaps'
let token = localStorage.getItem('access_token')
let current_user = localStorage.getItem('current_user')
let access_token = "Bearer " + token


class Allusers extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            contacts: []
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
            fetch("https://senditparcel.herokuapp.com/api/admin/v2/users",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Authorization":access_token
            },
        })
        .then(response => response.json())
        .then(parsedJSON => parsedJSON.all_users.map(user =>(
            {
                user_id:  `${user.user_id}`,
                first_name: `${user.first_name}`,
                last_name: `${user.last_name}`,
                username: `${user.username}`,
                email:    `${user.email}`,
                phone:   `${user.phone}`
            }
        )))
        .then(contacts => this.setState({
            contacts,
            isLoading: false
        }))
        .catch(error => console.log('parsing failed', error))

    }

    render(){
        const {isLoading, contacts } = this.state;
        return(
            <div>
                  <div className="padd">
      <h3>Fetch All Users   (10 users)</h3>
      </div>
      <div class="table-wrapper-scroll-y my-custom-scrollbar">

                <div className={`content ${isLoading ? 'is_loading' : ''}`}>
        <div className="card1">

                <div className="panel-group">
                {
                    !isLoading && contacts.length > 0 ? contacts.map(contact =>{

                        const {user_id, first_name, last_name, username,  email, phone } = contact
                        return <Colaps key={user_id} title={username}>
                  
                        FristName &nbsp; {first_name}<br/>
                        LastName &nbsp; {last_name} <br/>
                        Email &nbsp; {email}<br/>
                        PhoneNumber &nbsp;{phone}
                    </Colaps>
                    }) : null
                }
                    
                    
                    </div>
                </div>
            </div>
            <div className="loader">
                <div className="icon">
                
                </div>
            </div>
            </div>
            </div>
            

        )
    }
}
export default Allusers

     