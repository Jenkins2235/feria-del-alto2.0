import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import Navbar from 'react-bootstrap/Navbar'
import {LinkContainer} from 'react-router-bootstrap'
import ProductScreen from './Screens/ProductScreen';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import { Store } from './Store';
import CartScreen from './Screens/CartScreen';

function App() {
    const {state} = useContext(Store);
    const {cart} = state;
    return (
        <BrowserRouter>
        <div className='d-flex flex-column site-containe'>
        <header>
            <Navbar bg='dark' variant='dark' expand='lg'>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>feriaDelAlto.com</Navbar.Brand>
                    </LinkContainer>
                    <Nav className='me-auto'>
                        <Link to='/cart' className='nav-link'>
                        Cart
                        {cart.cartItems.length > 0 && (
                            <Badge pill bg='danger'>
                                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                            </Badge>
                        )}
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
        <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:slug' element={<ProductScreen />} />
            <Route path='/cart' element={<CartScreen />} />
        </Routes>
        </div>
        <footer>
            &copy;2022 by DigiLatam Corp.
        </footer>
        </BrowserRouter>
    );
}

export default App;
