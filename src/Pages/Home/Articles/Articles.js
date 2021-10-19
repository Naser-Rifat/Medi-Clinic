import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';

const Articles = () => {
    const [fakedata, setFakeData] = useState([]);

    useEffect(() => {
        fetch('./articles.json')
            .then(res => res.json())
            .then(data => setFakeData(data))
            .catch(error => {
                console.log(error.message);
            });

    }, [])


    return (
        <div>
            <div className="row  d-flex  mx-5">
                {
                    fakedata.map(data => <Article
                        key={data.id}
                        data={data}

                    ></Article>)
                }

            </div>

        </div>
    );
};

export default Articles;