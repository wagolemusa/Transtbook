import React, { Component } from 'react';

const Form = React.createClass({

    getInitialState() {
        return {
            car_number: this.props.body,
            from_location: this.props.from_location, 
            to_location: this.props.to_location,
            period: this.props.period,
            arrived: this.props.arrived,
            price: this.props.price,
            day_time: this.props.day_time,
        }
    },

    componentWillReceiveProps(props) {
        this.setState(props);
    },
})

export default Form