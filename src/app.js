import React from 'react';
import Header from './components/header/header';
import Products from './components/Products';
import Categories from './components/Categories';
import Cart from './components/Cart'


export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Categories />
        <Cart />
        <Products />        
      </>


    );
  }
}
