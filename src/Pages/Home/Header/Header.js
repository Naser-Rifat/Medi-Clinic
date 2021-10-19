import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import mediIcon from "../../../images/icon/medi-logo.png"


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img className="w-100" src={mediIcon} alt="logo" /> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="disabled:opacity-50 text-dark font-bold hover:bg-blue-200 mx-2 rounded" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="disabled:opacity-50 text-dark font-bold hover:bg-blue-200 mx-2 rounded" to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} className="disabled:opacity-50 text-dark font-bold hover:bg-blue-200 mx-2 rounded" to="/aboutus">About us</Nav.Link>
                        {
                            user?.email ? <Button onClick={logOut} className="btn btn-warning border mr-2">Logout</Button> :
                                <Nav.Link as={HashLink} className="disabled:opacity-50 text-dark font-bold hover:bg-blue-200 mx-2 rounded" to="/login">Login</Nav.Link>
                        }

                        <Navbar.Text>
                            Signed in as: <a href="/login">{user?.displayName && user.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
};

export default Header;