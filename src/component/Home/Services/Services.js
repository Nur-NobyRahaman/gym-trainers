import React from 'react';
import workout from '../../../images/services/workout.jpg'
import yoga from '../../../images/services/yoga.jpg'
import weightloss from '../../../images/services/weightloss.jpg'
import fitness from '../../../images/services/fintnes.jpg'
import boxing from '../../../images/services/boxing.jpg'
import running from '../../../images/services/running.jpg'
import Service from '../Service/Service';

const services=[
    {id:1,name:"BODYBUILDING",img:workout ,details:'The discipline of bodybuilding may be harsh, but it pays off...'},
    {id:4,name:"BOXING",img:boxing,details:'You will have the guidance and motivational support from our boxing trainers.'},
    {id:3,name:"FITNESS",img:fitness ,details:'Our fitness and CrossFit program is designed for universal scalability.'},
    {id:3,name:"RUNNING",img:running ,details:'Our fitness and CrossFit program is designed for universal scalability.'},
    
    {id:2,name:"YOGA",img:yoga ,details:'Yoga classes are a great way to unwind and develop your mind and body.'},
    {id:5,name:"WEIGHT LOSS",img:weightloss,details:'Yoga classes are a great way to unwind and develop your mind and body.'},
]
const Services = () => {
    
    return (
        <div id='services' className='container'>
            <h1 className='my-5 fw-bold'>Our Services</h1>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 '>
            {
                services.map(service=><Service key={service.id}
                service={service}    
                ></Service>)
            }

            </div>
        </div>
    );
};

export default Services;