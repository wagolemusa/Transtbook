import React, { Component } from 'react'
// import axios from 'axios'


let token = localStorage.getItem('access_token')
// let current_user = localStorage.getItem('current_user')
let access_token = "Bearer " + token
class Update extends Component {

    state = {
        post: null
    }
    // componentDidMount(){
    //     console.log(this.props);
    //     let id = this.props.match.params.price_id;
    //     axios.get(' https://senditparcel.herokuapp.com/api/admin/v2/locations'/+ id)
    //     .then(res => {
    //         this.setState({
    //             post: res.data
    //         })
    //         .catch(error => console.log('error:',error));

    //     })
    // }

    componentDidMount(){
        let id = this.props.match.params.price_id;
        fetch("https://senditparcel.herokuapp.com/api/admin/v2/locations"/+id,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Authorization":access_token
    },
    })
    .then(response => {
        if (!response.ok) {
          throw new Error("Bad response");
        }
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error(error));
  


}
    render(){

        const post = this.state.post ?(
            <div className="post">
                <h1>{this.state.post.from_location}</h1>
                <h1>{this.state.post.to_location}</h1>
            </div>
        ):(
            <div className="">Loading Loctions........</div>
        )

        return(

            <div>
            <h1>{post}</h1>
            </div>
        )
    }


}

export default Update