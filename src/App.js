import Navbar from './components/Navbar/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import { BrowserRouter as Router  , Switch , Route} from 'react-router-dom';
import Cart from "./components/Cart/Cart"
import {CartProvider} from "./components/Context/CartContext"
import mock from "./mock.json";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer  from "./components/ItemListDetailContainer/ItemDetailContainer";
import CartWidget from './components/CartWidget/CartWidget';
import Order from './components/Order/Order';
import Checkout from './components/Checkout/Checkout';
function App() {
  const [items, setItems] = useState([]);
 

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mock);
      }, 1000);
    }).then((resultado) => setItems(resultado));
  });

  
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:id">
          <ItemListContainer />
          </Route>
          <Route  path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/order">
            <Order />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </BrowserRouter>
      </CartProvider>
     
    </div>
    
  );
}





export default App;
