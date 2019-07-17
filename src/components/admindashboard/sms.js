import React, {Component} from 'react';
import Slide from './render/slide';
import AdminNav from './adminNav';
import EmailSend from './render/EmailSend';
import PhoneSend from './render/PhoneSend';


class Sms extends  Component{
    render(){
        return(
            <div>
            <AdminNav/>
            <Slide/>
            <br/><br/>
            <div className="container">
                <div className="row">

                    <div className="col">
                        <h1>Send Messages to all users on mobile phone</h1>
                    <PhoneSend/>
                    </div>

                    <div className="col">

                    <h1>Send Messages to all users with their email</h1>
                    <EmailSend />

                    </div>
             
           
                </div>
            </div>
            </div>
        )
    }
}
    
      
export default Sms


