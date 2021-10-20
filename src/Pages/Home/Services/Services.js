import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])
    return (
        <div className="mx-5 my-24">
            <div className=" row d-flex my-28">
                <h2 className="col-lg-6   leading-snug font-black text-left text-5xl">Would you rather stay at home than go into a <span className=" text-red-600">health care facility ?</span></h2>
                <p className="  col-lg-6  border-2 p-5 rounded  text-justify leading-normal font-semibold text-gray-500	">MediClinic Health Services provide patients with choices to ask for the conducting and analyzing of several lab tests on-site at no cost for prioritized patients or at 70% for people with an insurance. Additional testing can be ordered off site; those costs are the responsibility of the enquirers.</p>
            </div>
            <hr className="w-50 mx-auto my-28 text-red-600" />
            <h2 className="fw-bold text-4xl my-5 text-red-500">Clinical Service</h2>

            <div id="services" className="row g-4 mx-auto ">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;