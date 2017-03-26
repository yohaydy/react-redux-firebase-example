import React, { Component } from 'react';
import './App.css';
import { Square } from './components/square';
import Firebase from 'firebase';

let firebaseRef = null;

class App extends Component {


	constructor() {
		super();
		this.state = {}
		this.handleClick = this.handleClick.bind(this);
		this.firebaseRef = null;
	}

	componentDidMount(){
		const firebase = Firebase.initializeApp({
			apiKey: "AIzaSyCA5BMszcRpoWKCMWNnY0CYzYqHegDKmMU",
			authDomain: "enigma-3d614.firebaseapp.com",
			databaseURL: "https://enigma-3d614.firebaseio.com",
			storageBucket: "enigma-3d614.appspot.com",
			messagingSenderId: "1018063790497"
		})

		firebaseRef = firebase.database().ref()
		firebaseRef.on('value', snapshot => {
			const db = snapshot.val();
			console.log(snapshot && snapshot.val() || "guvk")
			this.setState({ squareX: db.xPos, squareY: db.yPos })
		})
	}

	handleClick(evt) {
		// this.setState({ squareX: evt.nativeEvent.offsetX, squareY: evt.nativeEvent.offsetY })
		firebaseRef.set({xPos: evt.nativeEvent.offsetX, yPos: evt.nativeEvent.offsetY})
	}

	render() {
		return (
			<div className="root" onClick={this.handleClick}>
				<Square x={this.state.squareX || 0} y={this.state.squareY || 0} />
			</div>
		);
	}
}

export default App;
