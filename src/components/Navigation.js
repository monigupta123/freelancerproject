import { Link } from "react-router-dom";

const Navigation = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/home">
                        <span className="navbar-brand">FreeLancer</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item"><Link to="/about"><span className="nav-link">About</span></Link></li>
                            <li className="nav-item"><Link to="/signup"><span className="nav-link">SignUp</span></Link></li>
                            <li className="nav-item"><Link to="/signin"><span className="nav-link">SignIn</span></Link></li>
                            <li className="nav-item"><Link to="/addtraining"><span className="nav-link">Add Training</span></Link></li>
                            <li className="nav-item"><Link to="/alltraining"><span className="nav-link">All Training</span></Link></li>
                            <li className="nav-item"><Link to="/allfreelancer"><span className="nav-link">All Freelancer</span></Link></li>
                    </ul>
                    <div className="ms-auto"> {/* Positioning the following button to the right end */}
                    
                    <button className="btn btn-primary">LogOut</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;
