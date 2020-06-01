import React, { Component } from 'react';
 
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedProd: null
           
        }
    }
    onProdSelect(prod){
      this.setState({selectedProd:prod});
    }

    renderProd(prod) {
      if (prod != null)
          return(
              <Card>
                  <CardImg top src={prod.image} alt={prod.name} />
                  <CardBody>
                    <CardTitle>{prod.name}</CardTitle>
                    <CardText>{prod.description}</CardText>
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
  }
    
    render() {
        const menu = this.props.products.map((prod) => {
            return (
              <div key={prod.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onProdSelect(prod)}>
                 <CardImg width='100%'src={prod.image} alt={prod.name} />
                     <CardImgOverlay>
                    <CardTitle>{prod.name}</CardTitle>
                   
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
            
                  {menu}
              
            </div>
            <div className="row">
              {this.renderProd(this.state.selectedProd)}

            </div>
          </div>
        );
    }
}

export default Menu;