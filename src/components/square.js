import React, { Component } from 'react';

export class Square extends Component {
    render() {

        const xPos = this.props.x -25;
        const yPos = this.props.y -25;

        return (
            <div className="square" style = {{ top: yPos, left: xPos }}>

            </div>
        )
    }
}