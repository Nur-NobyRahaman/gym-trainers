import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Checkin = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-primary'>ADMISSION</h1>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mt-2'>
               <div className='d-block mx-auto m'>
               <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">  
                        <Form.Control type="text" placeholder="Your Name" />   
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">  
                        <Form.Control type="email" placeholder="Enter email" readOnly/>   
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">  
                        <Form.Control type="text" placeholder="Phone Number" />   
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        
                        <Form.Control type="text" placeholder="Exercise Type" readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Payment?" />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        Check In
                    </Button>
                </Form>
               </div>
            </div>
        </div>
    );
};

export default Checkin;