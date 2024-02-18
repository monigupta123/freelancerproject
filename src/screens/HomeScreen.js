import React from 'react';
import Header from '../components/Header';
import { Link, useLocation } from 'react-router-dom';

const HomeScreen = (props) => {
    
    const location = useLocation();
    const userProfile = location.state?.userProfile;
    const signedIn = location.state?.userLogged;
    console.log("Home props received", userProfile);
    return (
        // <div style={{
        //     backgroundImage: "url('/images/trining.jpg')",
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     minHeight: '100vh',
        //     display: 'flex',
        //     flexDirection: 'column'
        // }}>
        <div>
            <Header title='Freelancer Home' />
            <div className="container-fluid" style={{textAlign: 'center'}}>
                
                    <Link to="/addtraining">
                        <button className='btn btn-primary' style={ {margin:10}}><span className="navbar-brand">Add training</span></button>
                    </Link>
                   
                    <Link to="/addtraining">
                    <button className='btn btn-primary' style={ {margin:10}}><span className="navbar-brand">View freelancer profile</span></button>
                        
                    </Link>
                    <Link to="/addtraining">
                    <button className='btn btn-primary' style={ {margin:10}}><span className="navbar-brand">Edit freelancer profile</span></button>
                    </Link>
                    
                    </div>
                    {!signedIn && <div className="ms-auto"> {/*Positioning the following button to the right end */}
              <Link to="/signup"><button className="btn btn-primary" style={{margin: 10}}>Sign Up</button></Link>
              <Link to="/signin"><button className="btn btn-primary">Sign in</button></Link>      
            </div>
          }
          {
            signedIn && 
            <Link to="/logout">
                    <button className='btn btn-primary' style={ {margin:10}}><span className="navbar-brand">Logout</span></button>
                    </Link>
          }
        </div>
    );
};

export default HomeScreen;
