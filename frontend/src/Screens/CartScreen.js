import React, { useContext } from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Store } from '../Store'
import ListGroup from 'react-bootstrap/ListGroup'
import Alert from 'react-bootstrap/Alert'
import {Link} from 'react-router-dom'
import {FaMinus, FaPlus, FaTrash} from 'react-icons/fa'

const CartScreen = () => {

    const {state, dispatch: ctxDispatch} = useContext(Store);
    const {cart: {cartItems}} = state;

    return (
        <div className='pdct-scrn'>
            <Row>
                <Col md={8}>
                    {cartItems.length === 0 ? (
                        <Alert>
                            El carrito esta vacio. <Link to='/'>Sigue Comprando</Link>
                        </Alert> ) : (
                            <ListGroup>
                                {cartItems.map((item) => (
                                    <ListGroup.Item key={item._id}>
                                        <Row>
                                            <Col md={1}>
                                                <img className='img-sm rounded'src={item.image} alt={item.name} />
                                            </Col>
                                            <Col md={5}>
                                                <Link to={`/product/${item.slug}`}>{item.name}</Link>
                                            </Col>
                                            <Col md={3}>
                                                <Button variant='light' disabled={item.quantity === 1}>
                                                    <FaMinus />
                                                </Button>
                                                    {' '}<span>{item.quantity}</span>{' '}
                                                <Button variant='light'>
                                                    <FaPlus />
                                                </Button>
                                            </Col>
                                            <Col md={2}>
                                                <p> Bs. {item.price}</p>
                                            </Col>
                                            <Col md={1}>
                                                <Button variant='danger'><FaTrash /></Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )}        
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>
                                        Subtotal: ({cartItems.reduce((a, c,) => a + c.quantity, 0)}{' '} 
                                        items) : Bs. {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                                    </h3>
                                </ListGroup.Item>
                            <Button>Proceder al Pago</Button>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CartScreen