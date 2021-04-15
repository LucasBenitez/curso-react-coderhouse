
import firebase from "../../Firebase/firebase";
import React , {useState , useContext} from 'react';
import { MDBBtn, MDBCardBody, MDBInput,MDBCardTitle ,MDBCardText,MDBContainer,MDBCard, MDBNavLink   } from "mdbreact";
import { CartContext } from '../Context/CartContext';
function Order(){
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [setId]=useState('');
    let id,title,price,total,date;
    const context = useContext(CartContext);
    const handleOnChangeName = e => {
        setName(e.target.value);
    }
    const handleOnChangePhone = e => {
        setPhone(e.target.value);
    }
    const handleOnChangeEmail = e => {
        setEmail(e.target.value);
    }
    const handleSubmit=e=>{
        const formRef = firebase.database().ref('orders')
        const form = 
        {
        usuario:{
            name,
            phone,
            email,
        },
        items:{
              id,
              title,
              price,
              date:new Date(),
              total,
            }
        }
        formRef.push(form)
    }
    const successfulPurchase =() =>{
        alert("Muchas gracias por su compra!")
        
        window.location.href= "/";
    }
        return(
            <MDBContainer className="mt-3">
                <MDBCard>   
{
                context.cart.map(
                            (obj, pos) => {
                                return (
                                    
                                        <MDBCardBody  key={obj.item.id} value={id=obj.item.id} className="mb-3 text-center">
                                            <MDBCardTitle className="text-center mt-3" value={title=obj.item.title}>{obj.item.title}</MDBCardTitle>
                                        
                                                <MDBCardText >Cantidad: {obj.quantity}</MDBCardText> 
                                                <MDBCardText value={price=obj.item.price}>Precio: ${obj.item.price} </MDBCardText>
                                                <MDBCardText value={total=obj.item.price * obj.quantity}>Subtotal: ${obj.item.price * obj.quantity} </MDBCardText>
                                               
                                           
                                        </MDBCardBody>
                                );
                            }
                        )
                        }             
                <MDBContainer>
                <MDBInput label="Ingrese su nombre"  value={name} onChange={handleOnChangeName}/>
                <MDBInput label="Ingrese su celular"  value={phone} onChange={handleOnChangePhone}/>
                <MDBInput label="Ingrese su email"  value={email} onChange={handleOnChangeEmail}/>
                <MDBContainer className="text-center">

                {/* <MDBNavLink to="/checkout" className="text-white"> */}
                <MDBBtn onClick={handleSubmit,successfulPurchase} >Finalizar compra</MDBBtn>
                {/* </MDBNavLink> */}

                </MDBContainer>
                </MDBContainer>
                </MDBCard>   
          </MDBContainer>

  );
        
}
export default Order;


