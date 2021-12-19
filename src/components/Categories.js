import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'



export default function Categories() {
    return (
        <>
            <h2>Browse our Categories</h2>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="">Food</Navbar.Brand>
                    <Navbar.Brand href="">ELECTRONICS</Navbar.Brand>
                    <Navbar.Brand href="">CONSOL</Navbar.Brand>
                    <Navbar.Brand href="">PHONE</Navbar.Brand>
                    <Navbar.Brand href="">GAMES</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}
