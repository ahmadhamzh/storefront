import React from 'react';
import { connect } from 'react-redux';
import './header.css';

export function Header(props) {
    return (
        <div id='headerDiv'>
            <h1>OUR STORE</h1>
            <nav>cart({props.Cart.cartItems.length})</nav>
        </div>
    )
}

const mapStateToProps = state => ({
    Cart: state.Cart,    
});


export default connect(mapStateToProps,)(Header);