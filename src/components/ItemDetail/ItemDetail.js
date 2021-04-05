import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBNavLink, MDBRow, MDBCol, MDBBtn } from "mdbreact";
function ItemDetail({ item }) {
  const initial = 0;
  const [stock, setStock] = useState(initial);
  const availableStock = item.stock - stock;

  const Stock = () => {
    return (
      <>
        <ItemCount
          max={item.stock}
          min="0"
          value={stock}
          onAdd={onAdd}
          onSubstract={onSubstract}
        />
      </>
    );
  };
  const NoStock = () => {
    return <h3> No stock available </h3>;
  };
  const Finish = () => {
    return (
      <>
        <MDBNavLink to="/cart" className="text-center">
          <MDBBtn variant="teal">Finalizar compra</MDBBtn>
        </MDBNavLink>
      </>
    );
  };
  const NoFinalizar = () => {
    return "";
  };
  const AñadirCarrito = () => {
    return (
      <>
        <MDBNavLink to="/cart" className="text-center">
          <MDBBtn variant="teal">Añadir al carrito</MDBBtn>
        </MDBNavLink>
      </>
    );
  };
  const NoAñadirCarrito = () => {
    return (
      <>
        <MDBNavLink to="/cart" className="text-center">
          <MDBBtn variant="teal" disabled>Añadir al carrito</MDBBtn>
        </MDBNavLink>
      </>
    );
  };
  const onAdd = (e) => {
    e.preventDefault();
    if (stock > item.stock) {
      setStock(item.stock);
    } else {
      setStock(stock + 1);
    }
  };

  const onSubstract = (e) => {
    e.preventDefault();
    if (stock < initial) {
      setStock(initial);
    } else {
      setStock(stock - 1);
    }
  };

  const IsAvailable = item.stock > 0 ? Stock : NoStock;
  const FinalizarCompra = stock > 0 ? Finish : NoFinalizar;
  const SePuedeAñadir = stock > 0 ? AñadirCarrito : NoAñadirCarrito;
  return (
    <MDBContainer id={item.id}>
      <MDBRow>
        <MDBCol>
          <img
            src={"../" + item.pictureUrl}
            alt={item.title}
            style={{ height: "30rem" }}
          />
          <IsAvailable />
        </MDBCol>
        <MDBCol>
          <h1 className="h1-responsive font-weight-bold text-center my-5">
            {item.title}
          </h1>
          <h2 className="text-center w-responsive mx-auto mb-3">
            Stock : {availableStock}
          </h2>
          <div className="text-center w-responsive mx-auto mb-5">
            {item.description}
          </div>
          <div className="text-center w-responsive mx-auto mb-5">
            {item.fullDescription}
          </div>
          <h2 className="text-center w-responsive mx-auto mb-3 font-weight-bold">
            $ {item.price}
          </h2>
        <MDBContainer className="d-flex">
        <SePuedeAñadir/>
          <FinalizarCompra />
        </MDBContainer>
          

        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ItemDetail;
