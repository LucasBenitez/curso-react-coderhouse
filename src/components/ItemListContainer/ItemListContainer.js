import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { MDBCardTitle, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import ItemCategories from "../ItemCategories/ItemCategories";
import mock from "../../mock.json";
import { Link } from "react-router-dom";

function ItemListContainer(props) {
  const [stockActual, setStockActual] = useState(5);
  const [carrito, setCarrito] = useState(0);

  let [categories, setCategories] = useState("");
  let [items, setItems] = useState("");
  let [itemsFiltered, setItemsFiltered] = useState("");
  let { id: idCategory } = useParams();

  const agregarCarrito = (e, stock) => {
    e.preventDefault();
    setStockActual(() => setStockActual(stockActual - stock));
    setCarrito(carrito + stock);
  };

  const getAll = () => {
    fetch("https://mercado-privado-default-rtdb.firebaseio.com/.json")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setItems(result.items);
        setCategories(result.categories);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const filterByCategory = (_category, _items) => {
    if (_items !== "") {
      if (_category !== undefined) {
        let filtered = Object.keys(_items)
          .filter((key) => {
            return _items[key].category === _category;
          })
          .reduce((obj, key) => {
            obj[key] = _items[key];
            return obj;
          }, {});

        setItemsFiltered(filtered);
      } else {
        setItemsFiltered(_items);
      }
    }
  };
  useEffect(() => {
    filterByCategory(idCategory, items);
  }, [idCategory, items]);

  useEffect(() => {
    getAll();
  }, []);
  return (
    <MDBContainer className="mt-3" >
        <ItemCategories categories={categories} />
      <ItemList items={itemsFiltered} />
    </MDBContainer>
  );
}

export default ItemListContainer;
