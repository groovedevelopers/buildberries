const LoginPage = () => {
    return (
        <div className="container create-account-page">
            <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-column justify-content-between">
                    <div>
                        <h2>Create your personal website with out facinating array of tools</h2>
                        <p>Implement out templates to create beautiful websites for your business and personal use</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <p>New user? Sign up here</p>
                        <i>Icon</i>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-around">
                    <i>Icon</i>
                    <h3>Login to your account</h3>
                    <form className="justify-content-around">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder="groovy123@gmail.com" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder="GroovyMohammed" className="form-input" />
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
