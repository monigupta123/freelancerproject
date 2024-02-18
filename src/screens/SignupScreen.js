import { useState, useEffect } from 'react';
import Header from '../components/Header';
import './SignupScreen.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const SignupScreen = () => { 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    
    const [apiResponse, setApiResponse] = useState();
    
    const navigate = useNavigate();

    useEffect(() => {
        console.log("inside use effect User signup ", apiResponse);
        if (apiResponse) {
            navigate('/signin');
        }
    }, [apiResponse,navigate]);

    const onSignup = () => {
        signupEvent(firstName, lastName, emailId, password, phoneNumber, address);
    }

    const signupEvent = (firstName,lastName,emailId,password,phoneNumber,address)=>{
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
                    setApiResponse(response.data)
                    console.log("User created ", response)
                })
                .catch((error) =>{
                    console.log("Error received ", error)
                })
            }
    
    return (
        <div>
            <Header title='Freelancer Signup'/>
            <div className='form'>
                <div className="signupform">
                    <div className='mb-3'>
                        <label className='form-label'>FirstName</label>
                        <input onChange={(e) => { setFirstName(e.target.value) }} type="text" className='form-control' placeholder="Enter your first name"/>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>LastName</label>
                        <input onChange={(e) => { setLastName(e.target.value) }} type="text" className='form-control' placeholder="Enter your last name"/>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>EmailId</label>
                        <input onChange={(e) => { setEmailId(e.target.value) }} type="text" className='form-control' placeholder="Enter your email address"/>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Paasword</label>
                        <input onChange={(e) => { setPassword(e.target.value) }} type="text" className='form-control' placeholder="Enter your password"/>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>PhoneNumber</label>
                        <input onChange={(e) => { setPhoneNumber(e.target.value) }} type="text" className='form-control' placeholder="Enter your phone number"/>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Address</label>
                        <input onChange={(e) => { setAddress(e.target.value) }} type="text" className='form-control' placeholder="Enter your address"/>
                    </div>

                    <div className= 'signupbtn'>
                        <button onClick={onSignup}>Register</button>
                    </div>

                    <div className='signinbtn'>
                        <p><b>Already Registered ?</b></p>
                        <Link to='/signin'><button>SignIn</button></Link>
                    </div>
                </div>
            </div>
            {/* { loading && <div> Waiting for result </div>} */}
        </div>
    )
}

export default SignupScreen;
