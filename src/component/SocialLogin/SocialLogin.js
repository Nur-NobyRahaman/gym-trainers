import React from 'react';
import social from '../../images/social.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center mt-3'>
                <div style={{height: '1px'}} className='w-50 bg-secondary'></div>
                <p className='mt-2 mx-3'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-secondary'>
                </div>
            </div>
            <button className='btn btn-light w-100'><img className='me-2' src={social}  alt=""></img>Google Sign In</button>
        </div>
    );
};

export default SocialLogin;