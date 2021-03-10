import React, { Component } from "react";
import { Button , Card} from 'react-bootstrap';
import fotoProducto from '../images/iphone-12.jpg';
class CardProducto extends Component{
    //constructor(props) {
        //super(props);
        //this.titulo = this.titulo.bind(this);
        //this.imagen = this.imagen.bind(this);
        //this.descripcion = this.descripcion.bind(this);
     // }
    render() {
        return (
    <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={fotoProducto}/>
            <Card.Body>
            <Card.Title>Iphone 12</Card.Title>
            <Card.Text>
            iPhone 12 Pro 256gb Caja Sellada Garantía Apple
            </Card.Text>
            <Button variant="teal" >Comprar</Button>
            </Card.Body>
        </Card>
        );
    }
}
export default CardProducto;
