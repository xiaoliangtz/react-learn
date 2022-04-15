import React from "react";
import '../assets/index.scss'

export default class Ball extends React.Component {
    constructor(props) {
        super(props);
        this.radius = this.props.radius || 100;
        this.ballColor = this.props.ballColor || 'lightblue';
        this.duration = 16;
        this.state = {
            left: this.props.left || 0, //横坐标
            top: this.props.right || 0, //纵坐标
            xSpeed: this.props.xSpeed || 5, //x轴速度
            ySpeed: this.props.ySpeed || 5, //y轴速度
        }
        this.move();
    }

    move () {
        
        setInterval(() => {
            //窗口宽、高
            let maxWidth = document.documentElement.clientWidth;
            let maxHeight = document.documentElement.clientHeight;
            let left = this.state.left + this.state.xSpeed;
            let top = this.state.top + this.state.ySpeed;
            
            if(left >= maxWidth - this.radius) {
                this.setState({
                    left: maxWidth - this.radius,
                    xSpeed: -this.state.xSpeed
                });
                // console.log(this.state.xSpeed);
            } else if (left <= 0) {
                this.setState({
                    left: 0,
                    xSpeed: -this.state.xSpeed
                })

            } else if (top <= 0) {
                this.setState({
                    top: 0,
                    ySpeed: -this.state.ySpeed
                })
            } else if (top >= maxHeight - this.radius) {
                this.setState({
                    top: maxHeight - this.radius,
                    ySpeed: -this.state.ySpeed
                })
            }
            this.setState({
                left,
                top
            })
            
        }, this.duration);
    }

    render () {
        return (
            <div className="ball" style={{ 
                left: this.state.left,
                top: this.state.top,
                width: this.radius,
                height: this.radius,
                backgroundColor: this.ballColor
            }}>
            </div>
        )
    }
}