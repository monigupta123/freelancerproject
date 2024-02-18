import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import './LoginScreen.css'
import axios from "axios"

const LoginScreen = (props) => {
    const [email,setEmailId] = useState('')
    const [password,setPassword] =useState('')
    const [apiResponse, setApiResponse] = useState()
    const [loading, setLoading] = useState()
    const navigate = useNavigate();
    const [signedIn, setSignedIn] = useState()

    const onSignin =()=>{
        signin(email,password)
    }

    const signin = (emailId,password)=>{
       
            const header = {
                headers: {
                    'Content-Type':'application/json',
                },
            }
            const body = {
                emailId,
                password,
            }
            const url = 'http://localhost:8070/freelancer/login'
            axios
                .post(url,body,header)
                .then((response) =>{
                   setApiResponse(response.data)
                   setLoading(false)
                   setSignedIn(true)
                   console.log("Response received ", response.data)
                })
                .catch((error) =>{
                    console.log("Error response received ", error)
            })
    }
    

    useEffect(()=>{
        if (apiResponse) {
            navigate('/home',  { state: { userProfile: apiResponse, userLogged: signedIn  } })
        }
    },[apiResponse])


    return (
        <div>
            <Header title="SignIn" />

            <div className='signinform'>
            <div className="form">
                    <div className='mb-3'>
                        <label className="form-label">Email</label>
                        <input onChange ={(e)=>{setEmailId(e.target.value)}}type="email" className="form-control" placeholder="Enter your email address" />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Paasword</label>
                        <input onChange ={(e)=>{setPassword(e.target.value)}}type="text" className='form-control' placeholder="Enter your password" />
                    </div>

                    <div className='mb-3'>
                        <button onClick={onSignin}>SignIn</button>
                        New User? <Link to="/signup">SignUp here</Link>
                    </div>

                </div>

            </div>

            {loading && <div> waiting for response</div> }
        </div>

    )
}

export default LoginScreen