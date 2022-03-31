import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/products')
            setProducts(result.data)
        }
        fetchData();
    },[])
    
    const showItems = 4
    const prepDisplayList = products.slice(0, showItems)
    return (
        <Container align='center'>
            <h2 className='featuredHeading'>Productos Recomendados</h2>
            <Col className='rectangle' >
                <Row className='featured'>
                {prepDisplayList.map((product) => {
                    return (
                    <Row key={product.id} className='product'>
                        <Col>
                            <h2>{product.name}</h2>
                        </Col>
                        <Col>
                            <img className='img-med' src={product.image} alt={product.name}></img>
                        </Col>
                        <Col>
                            <h3>Bs. {product.price}</h3>
                        </Col>
                        <Col>
                            <Button className='btn' variant="primary">Me Interesa</Button>
                        </Col>
                    </Row>
                )})}
                </Row>
            <Col>
                    <a className='containerLink' href="featured/user">Ver todos</a>
                </Col>
            </Col>
        </Container>
    )
}

export default HomeScreen