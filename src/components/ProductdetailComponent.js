import React  from 'react';
 import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';




 function RenderProd({prod}) {

          
    return(
     <div className="col-12 col-md-5 m-1">
    <Card onClick = {() => this.proddetail(prod)}>
        <CardImg top src={prod.image} alt={prod.name} />
        <CardBody>
          <CardTitle>{prod.name}</CardTitle>
          <CardText>{prod.description}</CardText>
        </CardBody>
    </Card>
    </div>
    );
      


}

function RenderComments({ comments }) {
if (comments != null)
return(
    <div className="col-12 col-md-5 m-1">
        <h4>comments</h4>
        <ul className="list-unstyled">
            {comments.map((comments) =>{
                return (
                    <li key={comments.id}>
                        <p>{comments.comment}</p>
                 <p>-- {comments.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                    </li>
                );
            })};             
        </ul>

    </div>
);
else
return(
    <div></div>
  );

}


const Productdetail = (props) => {
  if (props.prod != null) {
      return (
          <div className="container">
          <div className="row">
          <RenderProd prod={props.prod} />
          <RenderComments comments={props.prod.comments} />
              <div className="col-12">
                  <h3>{props.prod.name}</h3>
                
              </div>                
          </div>
         
          </div>
      );
  } else {
      return (
          <div></div>
      );
  }
}




    






export default Productdetail;