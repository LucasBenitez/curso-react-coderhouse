import React, { Component } from "react";
import CardProducto from './CardProducto';
import {Container} from 'react-bootstrap';
class ItemListContainer extends Component {
  render() {
    return (
      <Container>
        <CardProducto />
      </Container>
    );
  }
}
export default ItemListContainer;