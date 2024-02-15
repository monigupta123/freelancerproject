import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getFreelancer } from '../actions/freelancerActions';

const AllFreelancerScreen = (props) => {
    const dispatch = useDispatch();
    const allTrainingData = useSelector((store) => store.getAllTraining);
    const { error, response, loading } = allTrainingData;

    useEffect(() => {
        dispatch(getFreelancer());
    }, []);

    return (
        <div>
            <Header title="All Freelancer" />
            <table className="table">
                <thead>
                    <tr>
                       
                        <th>Freelancer ID</th>
                        <th>FirstName</th> 
                        <th>LastName</th>  
                        <th>EmailId</th>                    
                        <th>Address</th>
                        <th>ContactNumber</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {response &&
                        response.data &&
                        response.data.length > 0 &&
                        response.data.map((freelancer) => (
                            <tr>
                                <td>{freelancer.freelancerId}</td>
                                <td>{freelancer.firstName}</td>
                                <td>{freelancer.lastName}</td>
                                <td>{freelancer.emailId}</td>
                                <td>{freelancer.address}</td>
                                <td>{freelancer.phoneNumber}</td> 
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};



export default AllFreelancerScreen;
