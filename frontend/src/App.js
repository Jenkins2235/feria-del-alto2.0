import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import Navbar from 'react-bootstrap/Navbar'
import {LinkContainer} from 'react-router-bootstrap'


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
            </Navbar>
        </header>
        <Routes>
            <Route path='/' element={<HomeScreen />} />
        </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
