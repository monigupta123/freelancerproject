import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getTraining } from '../actions/trainingActions';
import './AllTraining.css';

const AllTraining = (props) => {
    const dispatch = useDispatch();
    const allTrainingData = useSelector((store) => store.getAllTraining);
    const { error, response, loading } = allTrainingData;

    useEffect(() => {
        dispatch(getTraining());
    }, []);

    return (
       <div>
            
            
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {response &&
                    response.data &&
                    response.data.length > 0 &&
                    response.data.map((training) => (
                        <div key={training.trainingId} className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <p className="card-text">
                                        <strong>Training Name:</strong> {training.trainingName}
                                    </p>
                                    <p className="card-text">
                                        <strong>Category:</strong> {training.trainingCategory}
                                    </p>
                                    <p className="card-text">
                                        <strong>Price:</strong> ${training.trainingPrice}
                                    </p>
                                    <p className="card-text">
                                        <strong>Duration:</strong> {training.trainingDuration} days
                                    </p>
                                    <div className='btn btn-primary float-end'>Details</div>
                                </div>
                            </div>
                        </div>
                    ))}
          
            </div>
            </div>
    );
};

export default AllTraining;
