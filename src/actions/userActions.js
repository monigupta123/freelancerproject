import { USER_SIGNUP_FAIL, USER_SIGNUP_SUCCESS, USER_SIGNUP_REQUEST } from "../constants/userConstants"
import { USER_SIGNIN_SUCCESS, USER_SIGNIN_REQUEST,USER_SIGNIN_FAIL } from "../constants/userConstants"
import axios from "axios"

export const signup = (firstName,lastName,emailId,password,phoneNumber,address)=>{
    return (dispatch) =>{
        dispatch({
            type:USER_SIGNUP_REQUEST,
        })
        const header = {
            headers: {
                'Content-Type':'application/json',
            },
        }
        const body ={
            firstName,
            lastName,
            emailId,
            password,
            phoneNumber,
            address,

        }
        const url = 'http://localhost:8070/freelancer'
        axios
            .post(url,body,header)
            .then((response) =>{
                dispatch({
                    type: USER_SIGNUP_SUCCESS,
                    // payload: {data: response.data, status: 'success'}
                    payload: {
                        response,
                        status: 'success'
                    }
                })
            })
            .catch((error) =>{
            dispatch({
                type: USER_SIGNUP_FAIL,
                // payload:{error: error, status: 'error'},
                payload: error,
            })
        })
    }
}


export const signin = (emailId,password)=>{
    return (dispatch) =>{
        dispatch({
            type:USER_SIGNIN_REQUEST,
        })
        const header = {
            headers: {
                'Content-Type':'application/json',
            },
        }
        const body ={
            emailId,
            password,
        }
        const url = 'http://localhost:8070/freelancer'
        axios
            .post(url,body,header)
            .then((response) =>{
                dispatch({
                    type: USER_SIGNIN_SUCCESS,
                    payload: response,
                })
            })
            .catch((error) =>{
            dispatch({
                type: USER_SIGNIN_FAIL,
                payload: error,
            })
        })
    }
}