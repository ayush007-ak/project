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
import {addComment , fetchProducts} from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';





const mapStateToProps = state => {
  return {
    products: state.products,
    comments: state.comments,
    stores: state.stores,
    promotions:state.promotions
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (prodId, rating, author, comment) => dispatch(addComment(prodId, rating, author, comment)),
  fetchProducts: () => { dispatch(fetchProducts())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
  
  

});

class Main extends Component {
  constructor(props) {
    super(props);
   
  }

  componentDidMount() {  
    this.props.fetchProducts();
  }

  

render() {
  const HomePage = () => {
    return(
        <Home prod={this.props.products.products.filter((prod) => prod.featured)[0]}
        productsLoading={this.props.products.isLoading}
        productsErrMess={this.props.products.errMess}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        stores={this.props.stores.filter((stores) => stores.featured)[0]}
        />
    );
  }


  const ProdWithId = ({match}) => {
    return(
        <Productdetail prod={this.props.products.products.filter((prod) => prod.id === parseInt(match.params.prodId,10))[0]} 
        isLoading={this.props.products.isLoading}
        errMess={this.props.products.errMess}
          comments={this.props.comments.filter((comment) => comment.prodId === parseInt(match.params.prodId,10))} 
          addComment={this.props.addComment}/>
    );
  };
  

  return (
    <div>
      <Header/>

      <TransitionGroup>
      <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
        <Switch  location={this.props.location}>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu products={this.props.products} />} />
              <Route path='/menu/:prodId' component={ProdWithId} />
              <Route exact path='/contactus' component={Contact}/>
               <Route exact path="/aboutus" component={() => <Aboutus stores={this.props.stores}></Aboutus>} />
               <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
              <Redirect to="/home" />
          </Switch>
          </CSSTransition>
          </TransitionGroup>
         <Footer/>
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
