import React, { Component } from 'react';
import Menu from './MenuComponent';
import { connect } from 'react-redux';
import Productdetail from './ProductdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import Aboutus from './AboutusComponent';



const mapStateToProps = state => {
  return {
    products: state.products,
    comments: state.comments,
    stores: state.stores,
    promotions:state.promotions
  }
}


class Main extends Component {
  constructor(props) {
    super(props);
   
  }

  

render() {
  const HomePage = () => {
    return(
        <Home prod={this.props.products.filter((prod) => prod.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        stores={this.props.stores.filter((stores) => stores.featured)[0]}
        />
    );
  }


  const ProdWithId = ({match}) => {
    return(
        <Productdetail prod={this.props.products.filter((prod) => prod.id === parseInt(match.params.prodId,10))[0]} 
          comments={this.props.comments.filter((comment) => comment.prodId === parseInt(match.params.prodId,10))} />
    );
  };
  

  return (
    <div>
      <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu products={this.props.products} />} />
              <Route path='/menu/:prodId' component={ProdWithId} />
              <Route exact path='/contactus' component={Contact}/>
               <Route exact path="/aboutus" component={() => <Aboutus stores={this.props.stores}></Aboutus>} />
              
              <Redirect to="/home" />
          </Switch>
         <Footer/>
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps)(Main));
