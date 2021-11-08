import templateImage from '../assets/images/template.jpg';

const OnlineStorePage = () => {
    return (
        <div className="container online-store-page">
			<div className="d-flex flex-column online-store-page-body">
			
				<div className="d-flex flex-column online-store-page-hero">
					<div>
						<h2>Create professional mail campaigns</h2>
						<p>Drive up traffic with engaging emails</p>
						<button className="btn btn-lg btn-primary">Get Started</button>
					</div>
				</div>

                <div className="container templates">
                    <h3>Select from templates available</h3>
                    <div>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="justify-content-center template">
                                <img src={templateImage} alt="" />
                                <span>Online Store</span>
                            </div>
                            <div className="justify-content-center template">
                                <img src={templateImage} alt="" />
                                <span>Business</span>
                            </div>
                            <div className="justify-content-center template">
                                <img src={templateImage} alt="" />
                                <span>Design</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row justify-content-between">
                    <div>
                        <h4>
                            Create and monitor your<br/>
                            own online store today
                        </h4>		
                        <p>
                        Select from our custom templates
                        and create a beautiful store to
                        market your products
                        </p>	
                    </div>
                    <div>
                        <button className="btn btn-lg btn-primary">Create Store</button>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default OnlineStorePage;
