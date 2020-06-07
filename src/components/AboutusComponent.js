import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStores({ stores}) {
    return (
        <Media tag="li">
            <Media left top>
                <Media object src={stores.image} alt={stores.name} />
            </Media>
            <Media body className="ml-5">
                <Media heading>{stores.name}</Media>
                <p>{stores.designation}</p>
                <p>{stores.description}</p>
            </Media>
        </Media>

    )
}

function Aboutus(props) {

    const stores = props.stores.map((stores) => {
        return (
            <div key={stores.id} className="col-12 mt-5">
                <RenderStores stores={stores} />
            </div>
        );
    });


    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2020, my Grocery Store quickly established itself as a informational website which gives you detail about your near store which is established in India, Jabalpur. Our aim is to establish and stores in one single platform with unique brand  that can be found nowhere else.  Featuring our newly added  four of the best stores of loctaion jabalpur, india  our aim is to add more stores for future growth, you never know what will arrive on your neary store the next time you visit us.</p>
                    <p>This website and startup is implemented and designed by our CEO <em>Ayush khaskalam</em>, for getting the information and services provided by grocery stores.You can also review shops here. </p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 june. 2020</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You can order grocery online or come and visit your nearby store for needed product.We provide you each and every company imported food products.</p>
                                <footer className="blockquote-footer">
                                <cite title="Source Title">Customers need is first priority</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Newly Added 4 top Stores. <em>We Soon going to add more stores nearby you</em></h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {stores}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;    