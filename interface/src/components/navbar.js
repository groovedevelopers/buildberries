import logo from '../assets/images/icons/groove_logo.jpeg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container d-flex justify-content-around">
                
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Company Logo" width="42" height="42" className="d-inline-block align-text-center"/>
                    &nbsp;Groove Developers
                </a>
                <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                    <ul className="nav justify-content-center">
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
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Log In</a>             
                        </li>
                        <li className="nav-item">
                            <a href="/" className="btn btn-primary btn-md" role="button" aria-pressed="true">Get Started</a>
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
