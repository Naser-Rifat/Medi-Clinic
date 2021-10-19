import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

const Article = ({ data }) => {
    const { img, title, description } = data;

    return (
        <>
            <Card className=" col-lg-5  mx-5 mb-16 border-2 p-3 hover:shadow-lg">



                <Card.Body className="text-left">
                    <Card.Title className="fw-bold">{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>

                <Card.Img className="w-40" variant="top" src={img} />


            </Card>
        </>
    );
};

export default Article;