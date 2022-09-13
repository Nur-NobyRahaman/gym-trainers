import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import pic from '../../images/social.png'
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkin = () => {
    let checkElement;
    let loadingElement;
    const { id, name, details, img } = useParams()
    console.log(img)
    const [user] = useAuthState(auth);
    const [agree, setAgree] = useState(false);

    const handleCheckIn = () => {
        alert('Check In Successfully');

    }

    return (
        <div className='mt-5'>
            <img src={img} alt=""></img>
            <h1 className='text-primary'>ADMISSION</h1>
            {checkElement}
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mt-2'>
                <div className='d-block mx-auto m'>
                    <Form onSubmit={handleCheckIn}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" value={user?.email} readOnly />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Phone Number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">

                            <Form.Control type="text" placeholder="Exercise Type"
                                value={name} readOnly />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onClick={() => setAgree(!agree)} type="checkbox"
                                className={`${agree ? 'text-primary' : 'text-danger'}`}
                                label="Payment?" />
                        </Form.Group>
                        <Button className='w-100'
                            disabled={!agree}
                            variant="primary" type="submit">
                            Check In
                        </Button>
                        <ToastContainer />
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Checkin;