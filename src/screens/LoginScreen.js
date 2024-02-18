import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import './LoginScreen.css'
import { signin } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'


const LoginScreen = (props) => {
    const [email,setEmailId] = useState('')
    const [password,setPassword] =useState('')

    const userSignin = useSelector(store =>store.userSignin)

    const {loading,error,response}=userSignin

    const dispatch = useDispatch()
    const Navigate= useNavigate()


    const onSignin =()=>{
        dispatch(signin(email,password))

    }

    useEffect(()=>{
            if(response && (response.status=='201')){
                // Navigate('/alltraining')
            }
            else if(response && response.status=='error'){
                alert(response.error)
            }
            else if(error){
                alert(error)
            }
    },[loading,error,response])


    return (
        <div>
            <Header title="SignIn" />

            <div className='signinform'>
            <div className="form">
                    <div className='mb-3'>
                        <label className="form-label">Email</label>
                        <input onChange ={(e)=>{setEmailId(e.target.value)}}type="email" className="form-control" required placeholder="Enter your email address" />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Paasword</label>
                        <input onChange ={(e)=>{setPassword(e.target.value)}}type="password" className='form-control'required placeholder="Enter your password" />
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