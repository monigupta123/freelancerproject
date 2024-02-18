import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import AllTraining from './AllTraining'


const GlobalHomeScreen = (props)=>{
    return (
    <div>
        <Header title='Freelancer website'/>
        <div className="ms-auto"  >
            <div>
                <Link to="/signup"><button className="btn btn-primary float-end" >Sign Up</button></Link>
            </div>
            
            
        </div>
        <div className="ms-auto"  >
        <div>
                <Link to="/signin"><button className="btn btn-primary float-end">Sign in</button></Link>
            </div>
        </div>
        <AllTraining />
        

    </div>
    )
}

export default GlobalHomeScreen