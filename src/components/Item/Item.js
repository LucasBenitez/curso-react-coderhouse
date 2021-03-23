
    import { Button , Card, Container} from 'react-bootstrap';
    function Item({item}){

            return (
         <Container className="d-flex align-content-center ">
        <Card  id={item.id} >
                <Card.Img  src={item.pictureUrl} alt={item.title} style={{ maxWidth: "22rem" , Height: "18rem"}}/>
                <Card.Body className= "text-center">
                <Card.Title >{item.title}</Card.Title>
                <Card.Text >
                {item.description}
                </Card.Text>
                <p className='font-weight-bold black-text'>${item.price}</p>
                <Button variant="teal">Comprar</Button>
                </Card.Body>
        </Card>
        </Container>
        );
    }

    export default Item;