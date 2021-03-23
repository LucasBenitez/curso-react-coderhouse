import { useState, useEffect } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetailContainer.css";
import { useParams } from 'react-router';
import mock from "../../mock.json";
import { MDBContainer } from 'mdbreact';

function ItemDetailContainer(props) {
    const [item, setItem] = useState('');

    useEffect(() => {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mock);
        }, 1000);
      }).then((resultado) => setItem(resultado));
    } , [item]);


    return (

        <MDBContainer>
          <ItemDetail item={"jV3KMmQe"} hidden/>
        </MDBContainer>

    )
  };
  
  export default ItemDetailContainer;