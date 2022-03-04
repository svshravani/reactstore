import React from 'react';
import {Container, ListGroup, ListGroupItem, Button, CardHeader, CardBody, Card, Col, Row} from "reactstrap"

const Cart = ({cartItem, removeItem}) => {
    let amount = 0;
    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.price)
    })
    return (
      <Container fluid>
        <h1 className='text-success'>Product's in the Cart</h1>
        {cartItem.length === 0 && <div>Your cart is empty</div>}

        <ListGroup>
            {cartItem.map((item)=>(
                <ListGroupItem key={item.id}>
                    <Row>
                        <Col>
                        <img
                        height={130}
                        width={150}
                        src={item.image}/>
                         </Col> 
                        
                        {/* <Col><div><Button>+</Button></div>
                        <div><Button>-</Button></div></Col> */}

                        <Col className='text-center'>
                            <div className='text-primary'>
                                {item.title}</div>
                            <div>Price: {item.price}</div>
                            <Button color='danger' onClick={()=>removeItem(item)}>Remove</Button>
                        </Col>
                    </Row>
                    </ListGroupItem>

            ))}
        </ListGroup>
        <div className="text-center">
                <strong>Grand Total: ${amount}</strong>
              </div>
    </Container>
    
  )


};

export default Cart;