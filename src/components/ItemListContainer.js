import { useState } from 'react';
import ItemCount from "./ItemCount";
import CardProducto from './CardProducto';
import {Container} from 'react-bootstrap';
import {MDBCardTitle} from 'mdbreact';
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
        <CardProducto />
        <hr></hr>
        <MDBCardTitle>Articulos del carrito: {carrito}</MDBCardTitle>
      <ItemCount stock={stockActual} initial={0} onAdd={agregarCarrito} />
      </Container>
    );
  }

export default ItemListContainer;