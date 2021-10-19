import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { ID } = useParams();

    const [data, setData] = useState([]);




    useEffect(() => {
        fetch("/details.json")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => {
                console.log(error.message);
            })
    }, [])

    const itemDetails = data.find(detailsData => detailsData.id == ID)
    console.log(itemDetails);

    return (

        <Card className="w-50 m-auto">
            <Card.Img variant="top" src={itemDetails.img} />
            <Card.Body>
                <Card.Text>
                    {itemDetails.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Details;