import React from 'react';
 import {Link} from 'react-router-dom';
import { Card, CardImg, CardImgOverlay,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

   function RenderMenuItem({prod, onClick }){
     return(
      <Card >
          <Link to={`/menu/${prod.id}`} >
      <CardImg width='100%'src={prod.image} alt={prod.name} />
          <CardImgOverlay>
         <CardTitle>{prod.name}</CardTitle>
        
       </CardImgOverlay>
       </Link>
     </Card>

     );
   }

    
   const Menu = (props) =>{

    const menu = props.products.map((prod) => {
      return (
        <div key={prod.id} className="col-12 col-md-5 m-1">
         <RenderMenuItem prod={prod} />
        </div>
      );
  });

  return (
    <div className="container">
   <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
      <div className="row">
         {menu}
         </div>
    
    </div>
  );

   }



export default Menu;