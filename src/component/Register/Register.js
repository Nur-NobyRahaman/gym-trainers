import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {
    let errorElement;
    let loadingElement;
    const navigate = useNavigate()
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    if (loading || updating) {

        loadingElement = <Loading></Loading>
    }

    if (user) {
        navigate('/');
    }
    if (error || updateError) {
        errorElement = <p className='text-danger'>{error.message}</p>
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        alert('Updated profile');
    }


    const navigateLogin = () => {
        navigate('/login')
    }

    return (
        <div className=''>
            <div className='container '>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5  '>
                    <div className=' d-block mx-auto'>
                        <h3 className='my-5  text-primary'>Please Register!!</h3>
                        {errorElement}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control type="text" placeholder="Your Name" name='name' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" name='email' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" name='password' />
                            </Form.Group>

                            <Form.Group className="mb-3 d-flex " controlId="formBasicCheckbox">
                                <Form.Check onClick={() => setAgree(!agree)} type="checkbox" />

                                <label className={` ps-3 ${agree ? ' text-primary' : ' text-danger'}`}>Accept the terms and condition</label>


                            </Form.Group>
                            {loadingElement}
                            <Button className='w-100 ' variant="primary"
                                disabled={!agree}
                                type="submit">
                                Register
                            </Button>
                        </Form>
                        <p onClick={navigateLogin} className='mt-2'>Already Register? <Link className='text-decoration-none' to={''}>Please Login</Link></p>

                        <SocialLogin></SocialLogin>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;