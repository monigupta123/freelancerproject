import { TRAINING_ADD_FAIL, TRAINING_ADD_REQUEST, TRAINING_ADD_SUCCESS, TRAINING_FETCH_FAIL, TRAINING_FETCH_REQUEST, TRAINING_FETCH_SUCCESS } from "../constants/trainingConstants"
import axios from "axios"

export const addtraining = (freelancerId,trainingName,trainingCategory,trainingPrice,trainingStartTime,trainingEndTime,trainingDuration,trainingDescription) =>{
    return (dispatch) =>{
        dispatch({
            type:TRAINING_ADD_REQUEST,
        })
    
    const header = {
        headers: {
            'Content-Type':'application/json',
        },
    }

    const body ={
        freelancerId,trainingName,trainingCategory,trainingPrice,trainingStartTime,trainingEndTime,trainingDuration,trainingDescription,
    
    }
    const url = 'http://localhost:8070/training'
    console.log("body data",body)
    axios
        .post(url,body,header)
        .then((response) =>{
            dispatch({
                type: TRAINING_ADD_SUCCESS,
                // payload: {data: response.data, status: 'success'}
                payload: response,
            })
        })
        .catch((error) =>{
        dispatch({
            type: TRAINING_ADD_FAIL,
            // payload:{error: error, status: 'error'},
            payload: error,
        })
    })
  }
}


export const getTraining = () =>{
    return (dispatch) =>{
        dispatch({
            type:TRAINING_FETCH_REQUEST,
        })
    
    const header = {
        headers: {
            'Content-Type':'application/json',
        },
    }


    const url = 'http://localhost:8070/training'
    axios
        .get(url,header)
        .then((response) =>{
            dispatch({
                type: TRAINING_FETCH_SUCCESS,
                // payload: {data: response.data, status: 'success'}
                payload: response,
            })
        })
        .catch((error) =>{
        dispatch({
            type: TRAINING_FETCH_FAIL,
            // payload:{error: error, status: 'error'},
            payload: error,
        })
    })
  }
}
