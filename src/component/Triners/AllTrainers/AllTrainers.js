import React from 'react';

const AllTrainers = ({trainer}) => {
    const {id,name,img}=trainer;
    return (
        <div>
            <div class="col">
                <div class="card">
                    <img src={img} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h4 class='card-title fw-bold'>{name}</h4>
                            <button className='w-75 my-3 btn btn-primary'>Contact</button>
                            
                        </div>
                </div>
            </div>
        </div>
    );
};

export default AllTrainers;<h>AllTrainers</h>