import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/esm/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Store } from '../Store';

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading: true};
        case 'FETCH_SUCCESS':
            return {...state, product: action.payload, loading: false};
        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}

const ProductScreen = () => {
    const navigate = useNavigate();
    const params = useParams();
    const {slug} = params;

    const [{loading, error, product}, dispatch] = useReducer(reducer, {
        product: {},
        loading: true,
        error: '',
    })
    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: 'FETCH_REQUEST'})
            try {
                const result = await axios.get(`/api/products/slug/${slug}`)
                dispatch({type: 'FETCH_SUCCESS', payload: result.data})
            } catch (err) {
                dispatch({type: 'FETCH_FAIL', payload: err.message})
            }
        }
        fetchData();
    },[slug])

    const {state, dispatch: ctxDispatch} = useContext(Store);
    const {cart} = state;
    const addToCartHandler = async () => {
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${product._id}`);
        if (data.countInStock < quantity) {
            window.alert('Lo sentimos, no tenemos tantos productos disponibles.')
        }

        ctxDispatch({type:'CART_ADD_ITEM', payload: {...product, quantity}});
        navigate('/cart')
    };

    return (
        loading? <div align='center'>Loading...</div>
        : error? <div>{error}</div>
        :
        <div>
            <Row className='pdct-scrn'>
                <Col md={5}>
                    <img src={product.image} alt={product.name} className='img-lg'/>
                </Col>
                <Col md={4}>
                    <ListGroup variant='flush'>
                        <ListGroupItem><h1>{product.name}</h1></ListGroupItem>
                        <ListGroupItem><h3>Bs. {product.price}</h3></ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card  className='pdct-scrn-card'>
                        <Card.Title className='bigPrice'>Bs. {product.price}</Card.Title>
                        <Card.Body className='pdct-scrn-bdy'>
                            <Badge bg='success'>Disponible</Badge>
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                    Cantidad
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='qty-dd'>
                                    <Dropdown.Item eventKey="1" >1</Dropdown.Item>
                                    <Dropdown.Item eventKey="2" >2</Dropdown.Item>
                                    <Dropdown.Item eventKey="3" >3</Dropdown.Item>
                                    <Dropdown.Item eventKey="4" >4</Dropdown.Item>
                                    <Dropdown.Item eventKey="5" >5</Dropdown.Item>
                                    <Dropdown.Item eventKey="6" >6</Dropdown.Item>
                                    <Dropdown.Item eventKey="7" >7</Dropdown.Item>
                                    <Dropdown.Item eventKey="8" >8</Dropdown.Item>
                                    <Dropdown.Item eventKey="9" >9</Dropdown.Item>
                                    <Dropdown.Item eventKey="10" >10</Dropdown.Item>
                                    <Dropdown.Item eventKey="11" >11</Dropdown.Item>
                                    <Dropdown.Item eventKey="12" >12</Dropdown.Item>
                                    <Dropdown.Item eventKey="13" >13</Dropdown.Item>
                                    <Dropdown.Item eventKey="14" >14</Dropdown.Item>
                                    <Dropdown.Item eventKey="15" >15</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                        <div align='center'>
                        <Button variant='primary' className='pdct-btn' onClick={addToCartHandler}>Agregar al Carrito</Button>
                        <Button variant='secondary' className='pdct-btn'>Contactame con el vendedor</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen