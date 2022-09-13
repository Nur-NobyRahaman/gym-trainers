import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    let loadingElement;
    let errorElement;
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );
    const from = location.state?.from?.pathname || '/';
    

    if (user) {
        navigate(from);
    };

    if (loading || sending) {
        loadingElement = <Loading></Loading>
    }
    if (error || resetError) {
        errorElement = <p className='text-danger'>{error.message}</p>
    }

    const navigateRegister = () => {
        navigate('/register');
    }
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email)
        signInWithEmailAndPassword(email, password)

    }
    const handleResetPassword = async () => {
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');

        }
    }
    return (
        <div className=''>
            <div className='container '>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5  '>
                    <div className=' d-block mx-auto'>
                        <h3 className='my-5 text-primary'>Please Login!!</h3>
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" name='email' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" name='password' />
                            </Form.Group>

                            {errorElement}
                            {loadingElement}
                            <Button className='w-100' variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <p onClick={handleResetPassword} className='mt-2'><Link className='ms-5  ps-5 text-decoration-none' to={''}>forget Password?</Link></p>
                        <button onClick={navigateRegister} className='btn btn-primary w-100'>Create a New Account</button>

                        <SocialLogin></SocialLogin>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;