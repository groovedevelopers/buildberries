import phoneImage from '../assets/images/phone.jpg';

function CallToAction() {
    return (
        <div className="container call-to-action">
            <div className="d-flex flex-row justify-content-around">
                <div className="d-flex flex-column pb-5">
                    <h2>Here’s why you should <br/> create with us</h2>
                    <p>We offer some of the best CMS <br/>services on the web and we will <br/>definitely leave your website in <br/> top notch state.</p>
                    <button className="btn btn-lg btn-primary">Get Started</button>
                </div>
                <div className="text-start">
                    <img src={phoneImage} alt="Phone" />
                </div>
            </div>
            <div className="row groove-icons">
        
            </div>
        </div>
    );
}

export default CallToAction;
