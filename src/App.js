import Navbar from './components/Navbar/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import React, { useState, useEffect } from "react";
//import { BrowserRouter as Router  , Switch , Route} from 'react-router-dom';

import mock from "./mock.json";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer  from "./components/ItemListDetailContainer/ItemDetailContainer";


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
      <Navbar/>
      <ItemListContainer items={items} greeting="There are no items yet" />
      <ItemDetailContainer />
    </div>
  );
}





export default App;
