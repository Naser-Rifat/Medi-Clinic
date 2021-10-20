import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, img, title, shortDescription } = service;



    return (



        <Card className=" col-lg-3 mx-10  col-md-8  hover:border-blue-400  border-1 p-2 hover:shadow-lg">
            <Link className="text-dark no-underline" to={`/details/${id}`}>
                <Card.Img className="w-100" style={{ height: "240px" }} variant="top" src={img} />
                <Card.Body className="p-4 text-justify">

                    <Card.Text className="fw-bold">
                        {title}
                    </Card.Text>
                    <Card.Text>
                        {shortDescription}
                    </Card.Text>
                    <Link className="text-dark" to={`/details/${id}`}>
                        <Button className=" btn btn-primary my-2 " >Details info</Button>
                    </Link>
                </Card.Body>
            </Link>
        </Card>




    );
};

export default Service;