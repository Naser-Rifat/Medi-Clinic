import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, img, description, title } = service;

    //  const history = useHistory();



    // const handleDetails = (description) => {
    //     history.push(`/details/${description}`);

    // }

    return (



        <Card className=" col-lg-4 col-md-8 m-5 hover:border-blue-400  border-2 hover:shadow-lg">
            <Card.Img style={{ height: "200px" }} variant="top" src={img} />
            <Card.Body className="p-4">
                <Card.Title className="fw-bold">{title}</Card.Title>
                <Card.Text className="text-center">
                    {description}
                </Card.Text>

                <Link to={`/details/${id}`}>
                    <Button className="btn border-1 text-primary" variant="primary"> Details info</Button>
                </Link>
            </Card.Body>
        </Card>




    );
};

export default Service;