import Logo from '../assets/images/icons/gd_logo.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = (props) => {

    // scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <nav className={ props.isIndex === "0" ? "navbar navbar-expand-lg navbar-light navbar-custom" : "navbar navbar-expand-lg navbar-light" }>
            <div className="container d-flex justify-content-around">
                
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Company Logo" width="42" height="42" className="d-inline-block align-text-center"/>
                </Link>
                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="nav justify-content-between">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/templates" className="nav-link">
                                Templates
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pricing" className="nav-link">
                                Pricing
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav justify-content-between">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Log In</Link>             
                        </li>
                        <li className="nav-item">
                            {
                            props.isIndex === "1" && 
                            <Link to="/create-account" className="btn btn-primary btn-md" role="button" aria-pressed="true">Get Started</Link>
                            }
                            {
                            props.isIndex === "0" && 
                            <Link className="nav-link" to="/create-account">Get Started</Link>
                            }
                        </li>
                    </ul>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
            </div>
        </nav>
    );
}

export default Navbar;
