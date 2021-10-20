import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./h.services.json')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => {

            })
    }, [])

    return (
        <div className="my-8">
            <div id="doorstepservices" className=" row mx-4 m-auto">
                {
                    data.map(hservice => <HomeService
                        key={data.id}
                        hservice={hservice}
                    ></HomeService>)

                }

            </div>
        </div>
    );
};

export default HomeServices;