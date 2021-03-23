import ItemDetailContainer from '../ItemListDetailContainer/ItemDetailContainer'
import {useEffect , useState} from "react";
function ItemDetail({ item }) {
    const[stock , setStock] = useState(item.stock);
    useEffect(() => {
        setStock(setStock);
    }, [item.stock]);
    return (
       
        <div className="container" id={item.id}>
             {console.log("el id es" + item.id)}
          <div className="col">
            <img src={item.pictureUrl} alt={item.title} />
          </div>
          <div className="col">
            <h3 className="title">{item.title}</h3>
            <div className="description">{item.description}</div>
            <div className="description">{item.fullDescription}</div>
            <span className="price">$ {item.price}</span>
          </div>
        </div>
    );
  }
  

export default ItemDetail;