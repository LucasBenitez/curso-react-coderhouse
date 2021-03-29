import Item from "../Item/Item";
import {MDBCol, MDBContainer, MDBRow}from 'mdbreact';
function ItemList (props) {

  return (
    <MDBContainer >
<MDBRow >
      {
        Object.keys(props.items).map(
          (id) => {
            return <Item key={id} id={id} item={props.items[id]} />;
          }
        )
        }
</MDBRow>
</MDBContainer>
  )
};

export default ItemList;