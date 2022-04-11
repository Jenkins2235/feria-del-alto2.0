import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import Navbar from 'react-bootstrap/Navbar'
import {LinkContainer} from 'react-router-bootstrap'
import ProductScreen from './Screens/ProductScreen';


function App() {
    return (
        <BrowserRouter>
        <div className='d-flex flex-column site-containe'>
        <header>
            <Navbar bg='dark' variant='dark' expand='lg'>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>feriaDelAlto.com</Navbar.Brand>
                    </LinkContainer>
                </Container>
                <Container>
                    <div></div>
                </Container>
            </Navbar>
        </header>
        <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:slug' element={<ProductScreen />} />
        </Routes>
        </div>
        <footer>
            &copy;2022 by DigiLatam Corp.
        </footer>
        </BrowserRouter>
    );
}

export default App;
