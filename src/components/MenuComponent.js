import React from 'react';
 
import { Card, CardImg, CardImgOverlay,
  CardTitle } from 'reactstrap';

   function RenderMenuItem({prod, onClick }){
     return(
      <Card onClick={() => onClick(prod.id)}>
      <CardImg width='100%'src={prod.image} alt={prod.name} />
          <CardImgOverlay>
         <CardTitle>{prod.name}</CardTitle>
        
       </CardImgOverlay>
     </Card>

     );
   }

    
   const Menu = (props) =>{

    const menu = props.products.map((prod) => {
      return (
        <div key={prod.id} className="col-12 col-md-5 m-1">
         <RenderMenuItem prod={prod} onClick={props.onclick}/>
        </div>
      );
  });

  return (
    <div className="container">
      <div className="row">
      
            {menu}
        
      </div>
    
    </div>
  );

   }



export default Menu;