import { Link } from 'react-router-dom';
import GDLogo from '../assets/images/icons/gd_logo.png';

const LoginPage = () => {
    return (
        <div className="container-fluid login-page">
            <div className="row">
                <div className="col-md-4 bg-image login-page-left">
                    <Link to="/"><img src={GDLogo} alt="GD logo" /></Link>
                    <div>
                        <h3>Create your personal website with out facinating array of tools</h3>
                        <p>Implement out templates to create beautiful websites for your business and personal use</p>
                    </div>
                    <div className="d-flex flex-row">
                        <p>New user? Sign up here</p>
                        <Link to="/create-account"><i className="fa fa-share"></i></Link>
                    </div>
                </div>
                <div className="col-md-8 login-page-right">
                    <Link to="/create-account"><i className="fa fa-reply" title="Go to Create Account"></i></Link>
                    <h3>Login to your account</h3>
                    <form className="justify-content-around">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder="groovy123@gmail.com" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder="GroovyMohammed" className="form-control" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-lg btn-primary">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
