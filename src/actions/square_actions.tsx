// import * as Firebase from 'firebase'
// import { store } from '../App'

// const dispatch = store.dispatch

// const firebase = Firebase.initializeApp({
//     apiKey: "AIzaSyCA5BMszcRpoWKCMWNnY0CYzYqHegDKmMU",
//     authDomain: "enigma-3d614.firebaseapp.com",
//     databaseURL: "https://enigma-3d614.firebaseio.com",
//     storageBucket: "enigma-3d614.appspot.com",
//     messagingSenderId: "1018063790497"
// })

// const firebaseRef = firebase.database().ref()
// firebaseRef.on('value', snapshot => {
//     console.log(snapshot && snapshot.val() || "guvk")
// })

export function updateCoordinates(xPos: number, yPos: number){
    
}

export function receiveCoordinates(xPos: number, yPos: number){
    return {
        type: "RECEIVE_COORDINATES",
        payload: {
            xPos,
            yPos
        }
    }
}