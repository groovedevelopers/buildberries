import templateImage1 from '../assets/images/template-1.png';
import templateImage2 from '../assets/images/template-2.png';
import templateImage3 from '../assets/images/template-4.png';

const OnlineStorePage = () => {
    return (
        <>        
        <div className="container-fluid d-flex flex-column online-store-page online-store-page-hero">
            <div>
                <h2>Create and manage an online store</h2>
                <p>Join some of our finest teams across 4 different countries</p>
                <button className="btn btn-lg btn-primary">Create Store</button>
            </div>
        </div>
        <div className="container online-store-page">
			<div className="d-flex flex-column online-store-page-body">
			
    

                <div className="container templates">
                    <h4>Select from templates available</h4>
                    <div>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="justify-content-center template">
                                <img src={templateImage1} alt="" />
                                <span>Online Store</span>
                            </div>
                            <div className="justify-content-center template">
                                <img src={templateImage2} alt="" />
                                <span>Business</span>
                            </div>
                            <div className="justify-content-center template">
                                <img src={templateImage3} alt="" />
                                <span>Design</span>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
        <div className="container-fluid d-flex flex-row bg-image justify-content-around align-items-center online-store-foot">
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
        </>
    );
};

export default OnlineStorePage;
