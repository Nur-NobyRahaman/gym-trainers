import React from 'react';
import{useNavigate} from 'react-router-dom'

const Service = ({service}) => {
    const { id, name, img,details } = service;
    const navigate=useNavigate()

    const navigateCheckIn=(id,name,details,img)=>{

        navigate(`/checkin/${id}/${name}/${details}`);
    }
    return (
        <div>
            <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text">{details}</p>
                        <button onClick={()=>navigateCheckIn(id,name,details,img)} className='btn btn-primary'>CHECK IN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;