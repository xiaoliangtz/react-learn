import React from "react";
import Ball from './Ball';

export default class BallList extends React.Component {
    render () {
        console.log(this.props.balls);
        return (
            this.props.balls.map( (ball, index) => <Ball key={index} {...ball}/> )
        )
    }
}