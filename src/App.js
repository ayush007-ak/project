import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import {PRODUCTS} from './shared/products';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS
    };
  }

render() {
  return (
    <div>
        <Navbar dark color="secondary">
          <div className="container">
            <NavbarBrand href="/">My Grocery Store.Com</NavbarBrand>
          </div>
        </Navbar>
        <Menu products={this.state.products}/>
    </div>
  );
}
}

export default App;
