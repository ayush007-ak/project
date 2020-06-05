import React  from 'react';
 import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link } from 'react-router-dom';


    function RenderProd({prod}) {

          
       return(
           <div className="col-12 col-md-5 m-1">
           <Card >
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
            {comments.map((comment) =>{
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                 <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.prod.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.prod.name}</h3>
                        <hr />
                    </div>                
                     </div>
                   <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderProd prod={props.prod} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                   </div>
                    </div>
             );
           }
       else {
        return (
            <div></div>
         );
  }
};




    






export default Productdetail;