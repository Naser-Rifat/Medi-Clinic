import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const HServiceDetail = () => {
    const { ID } = useParams();

    const [data, setData] = useState([]);




    useEffect(() => {
        fetch("/h.services.json")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => {
                console.log(error.message);
            })
    }, [])

    const itemDetails = data.find(detailsData => detailsData.id == ID)
    console.log(itemDetails);

    return (

        <Card className="w-55 mt-5 my-32 mx-auto border-0 text-justify">
            <Card.Img className="w-50 mx-auto" variant="top" src={itemDetails?.img} />
            <Card.Body >
                <Card.Text className="fw-bold">
                    {itemDetails?.title}
                </Card.Text>
                <Card.Text>
                    {itemDetails?.fulldescription}


                </Card.Text>
            </Card.Body>
        </Card>
    );
};


export default HServiceDetail;