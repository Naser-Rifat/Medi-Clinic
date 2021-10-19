import React from 'react';
import { Card } from 'react-bootstrap';
const HomeService = ({ hservice }) => {

    const { img, title, description } = hservice;
    return (

        <Card className="col-lg-3 m-5 shadow-sm p-2 ">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className="fw-bold">{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>


    );
};

export default HomeService;