import React from 'react';

const AllTrainers = ({trainer}) => {
    const {id,name,img}=trainer;
    return (
        <div>
            <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className='card-title fw-bold'>{name}</h4>
                            <button className='w-75 my-3 btn btn-primary'>Contact</button>
                            
                        </div>
                </div>
            </div>
        </div>
    );
};

export default AllTrainers;<h>AllTrainers</h>