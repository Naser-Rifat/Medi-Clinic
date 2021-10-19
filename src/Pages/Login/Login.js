import Button from '@restart/ui/esm/Button';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { handelSetName, resetPassword, isLogin, toogleLogin, GoogleSignIn, setUser, handelChangeEmail, handelChangePassword, handleRegistration, error, setError } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'


    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                history.push(redirect_url);
            })
            .catch((error) => {
                setError(error.message)

            })
    }



    return (
        <>
            <h2 className="m-2 fw-bold">{isLogin ? 'Login' : "Create Account"} </h2>
            <Form onSubmit={handleRegistration} className="w-50 m-auto border-2 p-3">
                {
                    !isLogin && <Form.Group as={Row} className="mb-3 m-auto">
                        <Form.Label column sm={4}>
                            Username
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control onBlur={handelSetName} type="text" placeholder="Username" required />
                        </Col>
                    </Form.Group>
                }
                <Form.Group as={Row} className="mb-3 m-auto" controlId="formHorizontalEmail">
                    <Form.Label column sm={4}>
                        Email
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control onBlur={handelChangeEmail} type="email" placeholder="Email" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="m-auto mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={4}>
                        Password
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control onBlur={handelChangePassword} type="password" placeholder="Password" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 4, offset: 4 }}>
                        <Form.Check className="mb-2" onChange={toogleLogin} label="Already Registered ?" />
                        <Button className="text-primary" onClick={resetPassword} >Forget Password</Button>
                    </Col>

                </Form.Group>
                <Form.Group as={Row} className="mb-3 m-auto">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <div className="text-danger">  {error}</div>
                    </Col>
                </Form.Group>



                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button className="btn btn-primary m-0 m-auto" type="submit">{isLogin ? "Sign in" : "Create Account"}</Button>
                    </Col>
                </Form.Group>
                <p>Are you new ? <Link to="/register">Create Account</Link></p>


                <br /><br />
                <Button onClick={handleGoogleSignIn} className="btn btn-warning"
                >Google Sign In</Button>
            </Form>




        </>

    );

};

export default Login;