import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HomeService = ({ hservice }) => {

    const { img, title, description, id } = hservice;
    return (

        <Card className="col-lg-3 m-5 hover:shadow-lg p-2 ">
            <Link className="text-dark no-underline" to={`/doorstepservices/${id}`}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Link className=" no-underline text-dark" to={`/doorstepservices/${id}`}>
                        <Card.Title className="fw-bolder hover:text-red-500">{title}</Card.Title>

                    </Link>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>



    );
};

export default HomeService;