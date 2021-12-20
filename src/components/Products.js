import React from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../store/CartRedux';
import { deleteFromCart } from '../store/CartRedux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './componenetCSS/Products.css'


export function Products(props) {
    function list() {
        let list 
        if (props.Products.list.length) {
            list = props.Products.list
        } else {
            list = props.Products.products.filter(item => item.categories === 'FOOD')
        }
        return list
    }
    console.log(props.Products.list);
    function MediaCard() {
        return (
            list().map(card => {
                const objCard = {name : card.name, price : card.price}
            return (<Card className='productsCard' sx={{ maxWidth: 450 }}>
                <CardMedia
                    component="img"                    
                    image={card.img}
                    height='400'
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {card.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=>props.addToCart(objCard)}>ADD CART</Button>
                    <Button size="small">More Detail</Button>
                </CardActions>
            </Card>)
            })
        );
    }

    return (
        <div id='Products'>
            <h1>hello {props.categories.Active}</h1>
            {MediaCard()}
        </div>
    )
}

const mapStateToProps = state => ({
    categories: state.Categories,
    Products: state.Products
});

const mapDispatchToProps = { addToCart, deleteFromCart }

export default connect(mapStateToProps, mapDispatchToProps)(Products);