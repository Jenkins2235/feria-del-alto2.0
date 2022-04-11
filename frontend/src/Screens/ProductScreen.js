import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/esm/Button';

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


    return (
        loading? <div>Loading...</div>
        : error? <div>{error}</div>
        :
        <div>
            <Row>
                <Col md={6}>
                    <img src={product.image} alt={product.name} className='img-lg'/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroupItem><h1>{product.name}</h1></ListGroupItem>
                        <ListGroupItem><h3>Bs. {product.price}</h3></ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Title className='bigPrice'>Bs. {product.price}</Card.Title>
                        <Card.Body>
                            <Badge bg='success'>Disponible</Badge>
                        </Card.Body>
                        <div align='center'>
                        <Button variant='primary' className='pdct-btn'>Agregar al Carrito</Button>
                        <Button variant='secondary' className='pdct-btn'>Contactame con el vendedor</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen