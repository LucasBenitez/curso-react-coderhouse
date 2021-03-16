import { useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBInput } from 'mdbreact';
const ItemCount = ({ stock, initial, onAdd }) => {
    const [stockActual, setStockActual] = useState(initial);
    let stockDisponible = stock - stockActual;

    const controladorInput = (e) => {
      e.preventDefault();
      setStockActual(Number(e.target.value));

      if (Number(e.target.value) > stock) {
        setStockActual(stock);
      }
      if (Number(e.target.value) < 0) {
        setStockActual(0);
      }
    };

    const modificadorIcono = (e) => {
      e.preventDefault();

      if (e.target.innerText === "-") {
        setStockActual(stockActual - 1);
      }
      if (e.target.innerText === "+") {
        setStockActual(stockActual + 1);
      }
    };

    return (
        <MDBCol style={{ maxWidth: "30rem" }}>
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>Cantidad de stock: {stockDisponible}</MDBCardText>
            <MDBInput className="input-number" type="number" value={stockActual} placeholder={initial} onChange={(e) => controladorInput(e)}></MDBInput>
            <MDBBtn variant="teal"  onClick={(e) => modificadorIcono(e)} disabled={stockActual <= 0}>-</MDBBtn>
            <MDBBtn variant="teal"  onClick={(e) => modificadorIcono(e)} disabled={stockActual >= stock}>+</MDBBtn>
            <MDBBtn variant="teal"  onClick={(e) =>{ onAdd(e, stockActual); setStockActual(0)}}>Añadir al carrito</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
};

export default ItemCount;