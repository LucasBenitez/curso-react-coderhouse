import { useState, useEffect } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from '../ItemCount/ItemCount';
import { useParams, Link } from "react-router-dom";
import mock from "../../mock.json";
import { MDBContainer , MDBNav, MDBNavLink , MDBIcon} from 'mdbreact';

function ItemDetailContainer(props) {
    const [item, setItem] = useState('');
    let { id } = useParams();
    

    const getItem = (id) => {
      fetch(`https://mercado-privado-default-rtdb.firebaseio.com/items/${id}.json`)
        .then(response => response.json())
        .then((result) => setItem(result))
        .catch((error) => {
          console.error('Error:', error);
        });
    };

    useEffect(() => {
      getItem(id);
    }, [id]);

    return (

      <>
            <MDBContainer className="mt-2">
              <ItemDetail item={item} />
            </MDBContainer>

      
    </>

    )
  };
  
  export default ItemDetailContainer;