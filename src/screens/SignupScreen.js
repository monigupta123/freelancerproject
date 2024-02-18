import { useState, useEffect } from 'react';
import Header from '../components/Header';
import './SignupScreen.css';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

const SignupScreen = (props) => { // Pass props as a parameter

    console.log("props data", props)
   

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const userSignup = useSelector((store) => store.userSignup);
    const { loading, response, error } = userSignup;

    useEffect(() => { // Correct the syntax of useEffect
        console.log("inside use effect User signup ", userSignup);
        if (response && response.status =='201') {
        //    Navigate('/signin')
            // this.props.history.push('/signin'); // Use './' for relative path

            // console.log("inside use effect");
        } else if (error) {
            console.log(error);
            alert('error while making api call');
        }
    }, [loading, response, error,props.history,userSignup]); // Add props.history to dependencies array

    const onSignup = () => {
        dispatch(signup(firstName, lastName, emailId, password, phoneNumber, address));
    }

    return (
        <div>
            <Header title='Signup'/>
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
                        <button onClick={onSignup}>SignUp</button>
                    </div>

                    <div className='signinbtn'>
                        <p><b>Already Registered ?</b></p>
                        <Link to='/signin'><button>SignIn</button></Link>
                    </div>
                </div>
            </div>
            { loading && <div> Waiting for result </div>}
        </div>
    )
}

export default SignupScreen; // Remove 'from where props coming in signup'
