import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import {MDBContainer, MDBIcon , MDBBtn , MDBCard , MDBCardBody,MDBCardTitle,MDBCardText,MDBCol, MDBRow , MDBCardHeader, MDBNavLink}  from 'mdbreact';

function Cart(props) {
    const context = useContext(CartContext);

    const onAdd = (e, item, quantity) => {
        context.addItem(e, item, quantity)
    };

    const onSubstract = (e, item, quantity) => {
        context.substractItem(e, item, quantity)
    };
    return (
        <MDBContainer >
            
            <div hidden={context.cart.length === 0}>
                
            <MDBCardHeader color="teal lighten-1" className="mt-3 mb-2">Articulos en el carrito</MDBCardHeader>
            <MDBCard>    
                  
                    {
                        context.cart.map(
                            (obj, pos) => {
                                return (
                                        <MDBCardBody  key={obj.item.id} className="mb-3 text-center">
                                            <MDBCardTitle className="text-center mt-3">{obj.item.title}</MDBCardTitle>
                                        
                                                <MDBCardText>Cantidad: {obj.quantity}</MDBCardText> 
                                                <MDBCardText>Precio: ${obj.item.price} </MDBCardText>
                                                <MDBCardText>Subtotal: ${obj.item.price * obj.quantity} </MDBCardText>
                                                <MDBContainer className="d-flex justify-content-center">
                                                <ItemCount min="1" max={obj.item.stock} value={obj.quantity} onAdd={(e) => { onAdd(e, obj.item, 1) }} onSubstract={(e) => { onSubstract(e, obj.item, 1) }}  />
                                                <MDBBtn onClick={() => { context.removeItem(pos) }} >
                                                <MDBIcon icon="trash" />
                                                </MDBBtn>
                                                </MDBContainer>
                                           
                                        </MDBCardBody>
                                );
                            }
                        )
                    }
               
                    <MDBCardTitle className="text-center"><strong>Total:</strong> <span>${context.totalPrice}</span> </MDBCardTitle>
                    <MDBBtn onClick={() => { context.clear() }} className="mr-0">Vaciar carrito</MDBBtn> 
                <MDBBtn to="/checkout" className={` ${context.cart.length === 0 ? 'disabled' : ''}`}  >
                    <MDBNavLink to="/checkout" className="text-white">
                    Confirmar compra
                    </MDBNavLink>
                    </MDBBtn>
                </MDBCard>
            </div>
            
        </MDBContainer >

    );
}

export default Cart;