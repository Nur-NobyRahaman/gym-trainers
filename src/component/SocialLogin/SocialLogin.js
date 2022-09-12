import React from 'react';
import social from '../../images/social.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {useNavigate} from 'react-router-dom'
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';



const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate()
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        navigate('/');
    }
    
    return (
        <div>
            <div className='d-flex align-items-center mt-3'>
                <div style={{height: '1px'}} className='w-50 bg-secondary'></div>
                <p className='mt-2 mx-3'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-secondary'>
                </div>
            </div>
            {
                error && <p className='text-danger'>{error.message}</p>
            }
            <button onClick={()=>signInWithGoogle()} className='btn btn-light w-100'><img className='me-2' src={social}  alt=""></img>Google Sign In</button>
            
        </div>
    );
};

export default SocialLogin;