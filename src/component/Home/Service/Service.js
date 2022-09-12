import React from 'react';
import{useNavigate} from 'react-router-dom'

const Service = ({service}) => {
    const { id, name, img,details } = service;
    const navigate=useNavigate()

    const navigateCheckIn=()=>{
        navigate('/checkin');
    }
    return (
        <div>
            <div class="col">
                <div class="card">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h2 class="card-title">{name}</h2>
                        <p class="card-text">{details}</p>
                        <button onClick={()=>navigateCheckIn()} className='btn btn-primary'>CHECK IN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;