import React, { Component } from 'react';
import Menu from './MenuComponent';
import {PRODUCTS} from '../shared/products';
import Productdetail from './ProductdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
      
    };
  }

  

render() {
  const HomePage = () => {
    return(
        <Home 
        />
    );
  }

  return (
    <div>
     
       <Header/>
       
       <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu products={this.state.products} />} />
              <Redirect to="/home" />
          </Switch>

      <Footer/>
    </div>
  );
}
}

export default Main;
