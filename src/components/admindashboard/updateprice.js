import React, { Component } from 'react'
import axios from 'axios'


let token = localStorage.getItem('access_token')
// let current_user = localStorage.getItem('current_user')
let access_token = "Bearer " + token
class Update extends Component {

    state = {
        post:null
    }
    // componentDidMount(){
    //     console.log(this.props);
    //     let id = this.props.match.params.price_id;
    //     axios.get('https://senditparcel.herokuapp.com/api/admin/v2/locations/'+ id,{
    //     headers:{
    //         "Content-Type":"application/json",
    //         "Accept":"application/json",
    //         "Authorization":access_token
    //     },          
    //     })
    //     .then(res => {
    //         this.setState({
    //             post: res.data
              
    //         })

    //     })
    //     // .catch((err) => {
    //     //     console.error('err', err);
    //     // });
    //     // .catch(error => console.error(error));
    // }

    componentDidMount(){
        let id = this.props.match.params.price_id;
        console.log(id)
        fetch('https://senditparcel.herokuapp.com/api/admin/v2/locations/'+ id,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Authorization":access_token
    },
    })
    .then((res)=>res.json())
    .then((res)=>{
      this.setState({
        post: res.data,
      })

    })
  
    }

    render(){
        const { post } = this.state;
        const postList = post ?(
            <div className="post">
                      {post.from_location}
            <h1>{post.to_location}</h1>
            </div>
        ):(
            <h1>Loading Loctions.......</h1>

        )

        return(

            <div>
            <h1>{ postList }</h1>
            </div>
        )
    }


}

export default Update