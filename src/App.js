import React, { Component } from 'react';
import './App.css';
import { Square } from './components/square';

class App extends Component {

	constructor(){
		super();
		this.state = {}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(evt){
		this.setState({ squareX: evt.nativeEvent.offsetX, squareY: evt.nativeEvent.offsetY})
	}

	render() {
		return (
			<div className="root" onClick = {this.handleClick}>
				<Square x = { this.state.squareX || 0 } y = { this.state.squareY || 0 }/>
			</div>
		);
	}
}

export default App;
