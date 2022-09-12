import React from 'react';
import yogo_t from '../../../images/Trainer/yoga-t.jpg'
import box_t from '../../../images/Trainer/box-t.jpg'
import fitness_t from '../../../images/Trainer/fitness-t.jpg'
import work_t from '../../../images/Trainer/work-t.jpg'
import Trainer from '../Trainer/Trainer';
import AllTrainers from '../AllTrainers/AllTrainers';



const trainers = [
    { id: 1, name: 'Will Smith', img: work_t },
    { id: 2, name: 'Rock', img: fitness_t },
    { id: 3, name: 'Robert Down', img: box_t },
    { id: 4, name: 'Jaimie Alexander', img: yogo_t },
]

const TrainerDetails = () => {
    return (
        <div className='container '>
            <h1 className='my-5 fw-bold'>TRAINERS</h1>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5'>
                {
                    trainers.map(trainer => <AllTrainers
                        key={trainer.id}
                        trainer={trainer}></AllTrainers>)
                }
            </div>


        </div>
    );
};

export default TrainerDetails;