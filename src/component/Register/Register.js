import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {Link,useNavigate} from 'react-router-dom'
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {
    const navigate=useNavigate()
    const navigateLogin=()=>{
        navigate('/login')

    }
    return (
        <div className=''>
            <div className='container '>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5  '>
                    <div className=' d-block mx-auto'>
                    <h3 className='my-5  text-primary'>Please Register!!</h3>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Your Name" name='name'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" name='email' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" name='password'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Accept the terms and condition" />
                        </Form.Group>
                        
                        <Button className='w-100' variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                    <p onClick={navigateLogin} className='mt-2'>Already Register? <Link  className='text-decoration-none' to={''}>Please Login</Link></p>

                    <SocialLogin></SocialLogin>
                   
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;