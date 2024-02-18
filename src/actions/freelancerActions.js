import { FREELANCER_GET_FAIL, FREELANCER_GET_REQUEST, FREELANCER_GET_SUCCESS } from "../constants/freelancerConstants"
import axios from "axios"

export const getFreelancer = () =>{
    return (dispatch) =>{
        dispatch({
            type:FREELANCER_GET_REQUEST,
        })
    
    const header = {
        headers: {
            'Content-Type':'application/json',
        },
    }


    const url = 'http://localhost:8070/freelancer'
    axios
        .get(url,header)
        .then((response) =>{
            dispatch({
                type: FREELANCER_GET_SUCCESS,
                // payload: {data: response.data, status: 'success'}
                payload: response,
            })
        })
        .catch((error) =>{
        dispatch({
            type: FREELANCER_GET_FAIL,
            // payload:{error: error, status: 'error'},
            payload: error,
        })
    })
  }
}
