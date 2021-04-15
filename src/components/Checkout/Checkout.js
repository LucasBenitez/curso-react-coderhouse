 import firebase from "../../Firebase/firebase";
import React  from 'react';

function Checkout(){
    var database = firebase.database();
    const order = firebase.database().ref('orders').child()
    const numeroDeOrden = order.length;

    return <h1>el numero es {numeroDeOrden}</h1>
}

export default Checkout; 