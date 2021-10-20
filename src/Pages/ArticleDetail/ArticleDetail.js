import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const ArticleDetail = () => {
    const { ID } = useParams();

    const [data, setData] = useState([]);




    useEffect(() => {
        fetch("/articles.json")
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
            <Card.Img variant="top" src={itemDetails?.img} />
            <Card.Body>
                <Card.Text className="fw-bold">
                    {itemDetails?.title}
                </Card.Text>
                <Card.Text>
                    {itemDetails?.description}
                </Card.Text>
                <a target="_blank" href={itemDetails?.link} >https://doi.org/10.1093/jn/nxz308</a>
            </Card.Body>
        </Card>
    );
}

export default ArticleDetail;