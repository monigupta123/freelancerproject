import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
    const [signedId, setSignedId] = useState()
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/">
                        <span className="navbar-brand">FreeLancer</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item"><Link to="/about"><span className="nav-link">About</span></Link></li>
                                <li className="nav-item"><Link to="/contact-us"><span className="nav-link">Contact us</span></Link></li>
                                <li className="nav-item"><Link to="/allfreelancer"><span className="nav-link">All Freelancer</span></Link></li>
                                </ul>
                    </div>
                    {/* </div>
                            <div className="ms-auto"> {/* Positioning the following button to the right end }
                                <Link to="/signup"><button className="btn btn-primary" style={{margin: 10}}>Sign Up</button></Link>
                                <Link to="/signin"><button className="btn btn-primary">Sign in</button></Link>
                            </div> */}
                        
                    </div> 
            </nav>
        </div>
    )
}

export default Navigation;
