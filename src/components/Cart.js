import React from 'react';
import { connect } from 'react-redux';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import './componenetCSS/Cart.css'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export function Cart(props) {
    return (
        <div id='Cart'>
            <Stack spacing={2} >
                {
                    props.Cart.cartItems.map(item => {
                        return <Item>{item.name} : {item.price} JD</Item>
                    })
                }
            </Stack>
        </div>
    )
}

const mapStateToProps = state => ({
    Cart: state.Cart,

});



export default connect(mapStateToProps)(Cart);