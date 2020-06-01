import React, { Component } from 'react';
import { Media } from 'reactstrap';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                  id: 0,
                  name:'Fruits',
                  image: 'assets/images/picture 1 png',
                  
                  label:'fruits',
                  description:'We have a unique variety of fruits everday.We have all different types of fruits available here.Do come and visit to buy.'        
                              },
               {
                id: 1,
                name:'Daily needs',
                image: 'assets/images/supermarket-png',
                label:'Snacks',
                description:'We provides a huge variety of snacks and daily useful groceries from sweet-tangy chips to tamarind sauce and other important items'        
                            },
             {
                  id: 2,
                   name:'Delivery',
                   image: 'assets/images/delivery.png',
                 category: 'appetizer',
                label:'New',
               price:'1.99',
             description:'We provide delivery service all over the city and have a huge staff for that to.So whenever uh need to order any grocery.we should be your first choice. '  
                                  },      
                  {
                  id: 3,
                  name:'Our Stores',
                  image: 'assets/images/custo.png',
                  category: 'dessert',
                  label:'',
                  price:'2.99',
                  description:'Our Stores haves huge variety and quality products avilable.We have connected to different stores around the cities.To fullfill our customer needs.'                        }
               ],
        };
    }
    
    render() {
        const menu = this.state.products.map((prod) => {
            return (
              <div key={prod.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={prod.image} alt={prod.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{prod.name}</Media>
                    <p>{prod.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {menu}
              </Media>
            </div>
          </div>
        );
    }
}

export default Menu;