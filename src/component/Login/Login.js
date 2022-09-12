import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {Link,useNavigate} from 'react-router-dom'
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate=useNavigate()
    const navigateRegister=()=>{
        navigate('/register');
    }
    return (
        <div className=''>
            <div className='container '>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5  '>
                    <div className=' d-block mx-auto'>
                    <h3 className='my-5 text-primary'>Please Login!!</h3>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        
                        
                        <Button className='w-100' variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <p className='mt-2'><Link  className='ms-5  ps-5 text-decoration-none' to={''}>forget Password?</Link></p>
                    <button onClick={navigateRegister} className='btn btn-primary w-100'>Create a New Account</button>

                    <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;