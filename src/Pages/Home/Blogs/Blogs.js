import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';

const Blogs = () => {


    const [article, setArtice] = useState([]);


    useEffect(() => {
        fetch('./articles.json')
            .then(res => res.json())
            .then(data => setArtice(data))
            .catch(error => {
                console.log(error.message);
            });

    }, [])


    return (
        <div>
            <div id="articles" className="row  d-flex  mx-5">
                {
                    article.map(data => <Article
                        key={data.id}
                        data={data}

                    ></Article>)
                }

            </div>

        </div>
    );
};

export default Blogs;