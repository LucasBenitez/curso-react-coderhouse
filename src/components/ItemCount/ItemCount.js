  import { useState } from 'react';
  import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBContainer, MDBInput,MDBNavLink } from 'mdbreact';
  const ItemCount = ({ min=0, max, value=0, onAdd, onSubstract}) => {
    /* const initial = 0
    const [stockActual, setStockActual] = useState(initial);
    const stock = item.stock
    const stockDisponible = stock - stockActual; */
    return (
  
        <MDBCol style={{ maxWidth: "30rem" }}>
        <MDBCard>
          <MDBCardBody>
            {/* <MDBCardText>Cantidad de stock: {stockDisponible}</MDBCardText>  */}
            {/* <MDBCardText> Stock disponible: {stockActual}</MDBCardText> */}
            <MDBInput type="number" label={value} min="0" max={max}></MDBInput>
            <MDBBtn variant="teal"  onClick={(e) => onSubstract(e)} disabled={value <= min}>-</MDBBtn>
            <MDBBtn variant="teal"  onClick={(e) => onAdd(e)} disabled={value >= max}>+</MDBBtn>
            
            {/* <MDBBtn variant="teal"  onClick={(e) =>{ onAdd(e, stockActual); setStockActual(0)}}>Añadir al carrito</MDBBtn> */}
            {/* <MDBContainer className="d-flex"> */}
            {/* <MDBNavLink to="/cart" className={`btn--big ${stock || 'disabled'}`}  >
              <MDBBtn variant="teal"  onClick={(e) =>{ onAdd(e, stockActual);}}> Comprar</MDBBtn>
              </MDBNavLink> */}
            
            {/* </MDBContainer> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  };



  export default ItemCount;