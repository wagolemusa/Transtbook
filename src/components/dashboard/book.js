import React, { Component } from 'react'
import { MDBContainer,MDBInput } from 'mdbreact';
import Back from './back';


let token = localStorage.getItem('access_token')
let current_user = localStorage.getItem('current_user')
let access_token = "Bearer " + token


class Book extends Component{

    state = {
        from_location:'',
        to_location:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        fetch('https://senditparcel.herokuapp.com/api/v2/search',{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type' : 'application/json',
                "Accept":"application/json",
                "Authorization":access_token
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            document.getElementById("reg").innerText = data["message"];

            data = data["data"];
            console.log(data)

            let output = `
                <table class="table">
                <caption>List of Departures</caption>
                <thead>
                <tr>
                <th scope="col">Car Number</th>
                <th scope="col">from</th>
                <th scope="col">To</th>
                <th scope="col">Price</th>
                <th scope="col">Time</th>
                <th scope="col"></th>
                </tr>
                </thead>
                `;
            
            Object.keys(data).forEach(function(searchme){
                output +=`
                <tr>
                <td>${data[searchme]["car_number"]}
                <td>${data[searchme]["from_location"]}</td>
                <td>${data[searchme]["to_location"]}</td>
                <td>${data[searchme]["price"]}</td>
                <td>${data[searchme]["day_time"]}</td>
                <td><button type="button" class="btn btn-primary"
                value="books" onClick="books('${data[searchme]["price_id"]}','${data[searchme]["car_number"]}','${data[searchme]["from_location"]}','${data[searchme]["to_location"]}','${data[searchme]["price"]}')">book</button></td>`
        
            })

            document.getElementById("showsearch").innerHTML = output + `</table>`;

        })
        .catch(error => console.log('error:',error));
    }

    

   books = e => {
    
    document.getElementById("single").innerText = "";
    document.getElementById("car_number").innerText = "";
    document.getElementById("location").innerHTML = "";
    document.getElementById("from_location").innerText = "";
    document.getElementById("too").innerHTML = "";
    document.getElementById("to_location").innerText = "";
    document.getElementById("pessa").innerHTML = "";
    document.getElementById("price").innerText = "";
    document.getElementById("editor").innerHTML =`

    <form name="modify"><br><p id="id"></p><br>
    <textarea maxlength="20" rows ="2" cols = "38" name="car_number">{car_number}</textarea><br><br>
    <textarea maxlength="20" rows ="2" cols = "38" name="from_location">{from_location}</textarea><br><br>
    <textarea maxlength="20" rows ="2" cols = "38" name="to_location">{to_location}</textarea><br><br>
    <textarea maxlength="20" rows ="2" cols = "38" name="price">{price}</textarea><br><br>

    <input type="number" maxlength="20" rows ="2" cols = "33" name="quality" placeholder="How many seats"><br><br>
    <input type="date" maxlength="20" rows ="2" cols = "33" name="dates" placeholder="Date"><br><br>

     <button class="view" name="save" id="search">Book</button></form>
    <br/>
  </div>
</div>
`;
document.getElementById("search").addEventListener("click",
    function modifyEntry(event){
        event.preventDefault();
        let url = "https://senditparcel.herokuapp.com/api/v2/book";
        // console.log(modify)

            let  car_number = document.forms["modify"]["car_number"].value;
            let from_location = document.forms["modify"]["from_location"].value;
            let to_location = document.forms["modify"]["to_location"].value;
            let price = document.forms["modify"]["price"].value;
            let quality = document.forms["modify"]["quality"].value;
            let dates = document.forms["modify"]["dates"].value;
            let total = price * quality;

            let data = {car_number:car_number, from_location:from_location, to_location:to_location, price:price, quality:quality,dates:dates, total:total}
            console.log(data)
            fetch(url, {
                method:"POST", headers: {"Contant-Type":"application/json","Authorization":access_token},
                body:JSON.stringify(data)
            })
            .then((response)=>response.json())
            .then((data)=>{
                document.getElementById("msge").innerText = data["message"]
                window.location.replace("lipa.html")

            })
            .catch((error)=>console.log(error))

    });

   }
    render(){
        return(
            <div>
            <Back/>


            <MDBContainer>
                <div className="card card-body">
                <h2>Search Where You Want To Go</h2>
                <div id="reg"></div>
            <form onSubmit={this.handleSubmit} className="white">

            <div className="row">
                <div className="col-md-5">
                    <MDBInput label="From" type="text" id="from_location" onChange={this.handleChange} required/>
                </div>
                <div className="col-md-5">
                    <MDBInput label="To" type="text" id="to_location" onChange={this.handleChange} required/>
                </div>
                <div className="col-md-2">
                    <button className="btn pink lighten-1 z-depth-0">Search</button> 
                </div>  
            </div>
            </form>
            <div id="showsearch"></div>
            <div id="editor"></div>
            </div>
            </MDBContainer>
            </div>
        )
    }
}


export default Book;