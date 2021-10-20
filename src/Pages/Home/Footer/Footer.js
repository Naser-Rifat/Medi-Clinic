import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../images/icon/medi-black-logo.png";
import './Footer.css';

const Footer = () => {
    return (
        <div className="row d-flex p-16 bg-dark text-white footer" >
            <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                <img src={logo} alt="" />
                <p className="m-0">Plot #, Road #,

                    Dhaka, Bangladesh</p>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                <p className="mb-2 font-extrabold text-gray-400">HELP</p>
                <ul className="list-none p-0 m-0">
                    <li><Link to="/" className="m-0 text-white no-underline">Help Center</Link></li>
                    <li><Link to="/" className="m-0 text-white no-underline">Authors</Link> </li>
                </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                <p className="mb-2 font-extrabold text-gray-400">OUR COMMUNITY</p>
                <ul className="list-none p-0 m-0">
                    <li><Link to="/" className="m-0 text-white no-underline	">Community</Link></li>
                    <li><Link to="/" className="m-0 text-white no-underline	">Blog</Link></li>
                    <li><Link to="/" className="m-0 text-white no-underline	">Forums</Link></li>
                    <li><Link to="/" className="m-0 text-white no-underline	">Blog</Link></li>
                    <li><Link to="/" className="m-0 text-white no-underline	">Meetups</Link></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                <p className="mb-2 font-extrabold text-gray-400">MEET MEDICLINC</p>
                <ul className="list-none p-0 m-0">
                    <li><Link to="/" className="m-0 text-white no-underline	">About us</Link></li>
                    <li><Link to="/" className="m-0 text-white no-underline	">Privacy Policy</Link></li>
                    <li><Link to="/" className="m-0 text-white no-underline	">Social Work</Link></li>
                </ul>

            </div>



        </div>
    );
};

export default Footer;