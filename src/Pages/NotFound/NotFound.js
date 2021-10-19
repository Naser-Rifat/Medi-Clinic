import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/Notfound/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img className="w-100" src={notFound} alt="notfound" />
            <Link to="/home">
                <button>Go back</button>
            </Link>


        </div>
    );
};

export default NotFound;