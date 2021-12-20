import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { ActiveCategories } from '../store/Categories'
import { connect } from 'react-redux';
import { ListCategories } from '../store/Products'
import './componenetCSS/Categories.css'



export function Categories(props) {
    console.log(props);
    function handelClick(name) {
        props.ActiveCategories(name)
        props.ListCategories(name)
    }
    return (
        <>
            <h2>Browse our Categories</h2>
            <Navbar id='Categories' bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='navBar' onClick={() => handelClick('FOOD')} >Food</Navbar.Brand>
                    <Navbar.Brand className='navBar' onClick={() => handelClick('ELECTRONICS')} >ELECTRONICS</Navbar.Brand>
                    <Navbar.Brand className='navBar' onClick={() => handelClick('CONSOL')} >CONSOL</Navbar.Brand>
                    <Navbar.Brand className='navBar' onClick={() => handelClick('PHONE')} >PHONE</Navbar.Brand>
                    <Navbar.Brand className='navBar' onClick={() => handelClick('GAMES')} >GAMES</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

const mapDispatchToProps = { ActiveCategories, ListCategories }

export default connect(null, mapDispatchToProps)(Categories);
