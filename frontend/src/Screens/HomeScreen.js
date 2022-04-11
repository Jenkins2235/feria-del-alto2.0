import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import 'react-multi-carousel/lib/styles.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { Link } from 'react-router-dom';

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading: true};
        case 'FETCH_SUCCESS':
            return {...state, products: action.payload, loading: false};
        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}

const HomeScreen = () => {
    // const [products, setProducts] = useState([]);
    const [{loading, error, products}, dispatch] = useReducer(reducer, {
        products: [],
        loading: true,
        error: '',
    })
    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: 'FETCH_REQUEST'})
            try {
                const result = await axios.get('/api/products')
                dispatch({type: 'FETCH_SUCCESS', payload: result.data})
            } catch (err) {
                dispatch({type: 'FETCH_FAIL', payload: err.message})
            }
            // setProducts(result.data)
        }
        fetchData();
    },[])
    
    const prepDisplayList = products.slice(0, 6)
    const prepDisplayList2 = products.slice(1, 7)
    return (
        <div>
            <Container align='center'>
                <h2 className='featuredHeading'>Productos Recomendados</h2>
                <Carousel>
                    {loading? (
                        <div>Loading...</div>
                    ) : error? (
                        <div>{error}</div>
                    ) : (
                    prepDisplayList.map((product) => {
                        return (
                        <Carousel.Item key={product.id} className='grid'>
                            <img className='carousel' variant='dark' src={product.image} alt={product.name} />
                            <Carousel.Caption>
                                <h2>{product.name}</h2>
                                <h4>{product.price}</h4>
                                <Button className='btn' variant="primary">
                                    <Link className='carouselLink' to={`/product/${product.slug}`}>Me Interesa</Link>
                                </Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}))}
                </Carousel>
            </Container>
            <Container align='center'>
                <Card>AD SPACE</Card>
            </Container>
            <Container align='center'>
                <h2 className='featuredHeading'>Ropa</h2>
                <Row className='featured' sm={4} md={5} lg={6}>
                {loading? (
                        <div>Loading...</div>
                    ) : error? (
                        <div>{error}</div>
                    ) : (
                    prepDisplayList2.map((product) => {
                        return (
                        <Card key={product.id} className='product'>
                            <Link className='carouselLink' to={`/product/${product.slug}`}>
                                <Card.Img variant='top' src={product.image} alt={product.name} />
                            </Link>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <ListGroup variant='flush'>
                                    <ListGroupItem>Bs. {product.price}</ListGroupItem>
                                </ListGroup>
                                <Button className='btn' variant="primary">Me Interesa</Button>
                            </Card.Body>
                        </Card>
                )}))}
                </Row>
                <a className='containerLink' href="featured/user">Ver todos</a>
            </Container>
            <Container align='center'>
                <h2 className='featuredHeading'>Hogar</h2>
                <Row className='featured'>
                {loading? (
                        <div>Loading...</div>
                    ) : error? (
                        <div>{error}</div>
                    ) : (
                    prepDisplayList.map((product) => {
                        return (
                        <Card key={product.id} className='product'>
                            <Card.Img variant='top' src={product.image} alt={product.name} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <ListGroup variant='flush'>
                                    <ListGroupItem>Bs. {product.price}</ListGroupItem>
                                </ListGroup>
                                <Button className='btn' variant="primary">Me Interesa</Button>
                            </Card.Body>
                        </Card>
                )}))}
                </Row>
                <a className='containerLink' href="featured/user">Ver todos</a>
            </Container>
            <Container align='center'>
                <h2 className='featuredHeading'>Cuidado Personal</h2>
                <Row className='featured'>
                {loading? (
                        <div>Loading...</div>
                    ) : error? (
                        <div>{error}</div>
                    ) : (
                    prepDisplayList.map((product) => {
                    return (
                    <Card key={product.id} className='product'>
                        <Card.Img variant='top' src={product.image} alt={product.name} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <ListGroup variant='flush'>
                                <ListGroupItem>Bs. {product.price}</ListGroupItem>
                            </ListGroup>
                            <Button className='btn' variant="primary">Me Interesa</Button>
                        </Card.Body>
                    </Card>
                )}))}
                </Row>
                <a className='containerLink' href="featured/user">Ver todos</a>
            </Container>
            <Container align='center'>
                <Card>AD SPACE</Card>
            </Container>
            <Container align='center'>
                <h2 className='featuredHeading'>Autos</h2>
                <Row className='featured'>
                {loading? (
                        <div>Loading...</div>
                    ) : error? (
                        <div>{error}</div>
                    ) : (
                        prepDisplayList.map((product) => {
                    return (
                    <Card key={product.id} className='product'>
                        <Card.Img variant='top' src={product.image} alt={product.name} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <ListGroup variant='flush'>
                                <ListGroupItem>Bs. {product.price}</ListGroupItem>
                            </ListGroup>
                            <Button className='btn' variant="primary">Me Interesa</Button>
                        </Card.Body>
                    </Card>
                )}))}
                </Row>
                <a className='containerLink' href="featured/user">Ver todos</a>
            </Container>
            <Container align='center'>
                <h2 className='featuredHeading'>Ferreteria</h2>
                <Row className='featured'>
                {loading? (
                        <div>Loading...</div>
                    ) : error? (
                        <div>{error}</div>
                    ) : (
                        prepDisplayList.map((product) => {
                    return (
                    <Card key={product.id} className='product'>
                        <Card.Img variant='top' src={product.image} alt={product.name} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <ListGroup variant='flush'>
                                <ListGroupItem>Bs. {product.price}</ListGroupItem>
                            </ListGroup>
                            <Button className='btn' variant="primary">Me Interesa</Button>
                        </Card.Body>
                    </Card>
                )}))}
                </Row>
                <a className='containerLink' href="featured/user">Ver todos</a>
            </Container>
        </div>
    )
}

export default HomeScreen