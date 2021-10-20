import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Article = ({ data }) => {
    const { img, title, id } = data;

    return (
        <>
            <Card className=" col-lg-5  mx-5 mb-16   p-3 hover:shadow-2xl">

                <Link className="text-dark no-underline" to={`/articledetails/${id}`}>
                    <div className="grid grid-rows-5 grid-flow-col gap-0">

                        <Card.Body className=" row-span-2 text-justify">
                            <Card.Title className="fw-bold">{title}</Card.Title>
                        </Card.Body>
                        <div className=" row-span-3 justify-center item-center">
                            <Card.Img className="img-fluid" variant="top" src={img} />

                        </div>

                    </div>

                </Link>

            </Card>
        </>
    );
};

export default Article;