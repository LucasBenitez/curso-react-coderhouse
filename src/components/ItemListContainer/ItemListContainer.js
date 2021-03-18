import { useState } from 'react';
import {Container} from 'react-bootstrap';
import {MDBCardTitle} from 'mdbreact';

import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


  function ItemListContainer(props) {
    const [stockActual, setStockActual] = useState(5);
    const [carrito, setCarrito] = useState(0);

    const agregarCarrito = (e, stock) => {
        e.preventDefault();
        setStockActual(() => setStockActual(stockActual - stock));
        setCarrito(carrito + stock);
    }
    return (
      <Container>
        <h3>
                {props.items ? '' : props.greeting}
        </h3>
        <ItemList items={props.items} />
        <hr></hr>
        <MDBCardTitle>Articulos del carrito: {carrito}</MDBCardTitle>
      <ItemCount stock={stockActual} initial={0} onAdd={agregarCarrito} />
      </Container>
    );
  }

export default ItemListContainer;