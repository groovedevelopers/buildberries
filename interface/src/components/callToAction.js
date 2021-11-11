import GDLogo from '../assets/images/icons/gd_logo.png';
import phoneImage from '../assets/images/cta_image.png';

function CallToAction() {
    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-around align-items-center call-to-action">
                <div className="d-flex flex-column pb-5">
                    <h2>Here’s why you should <br/> create with us</h2>
                    <p>We offer some of the best CMS <br/>services on the web and we will <br/>definitely leave your website in <br/> top notch state.</p>
                    <button className="btn btn-lg">Get Started</button>
                </div>
                <div className="text-start">
                    <img src={phoneImage} alt="Phone" />
                </div>
            </div>
            <div className="d-flex flex-row justify-content-around align-items-center groove-icons">
                <img src={GDLogo} alt="Logo icon" />
                <img src={GDLogo} alt="Logo icon" />
                <img src={GDLogo} alt="Logo icon" />
                <img src={GDLogo} alt="Logo icon" />
            </div>
        </div>
    );
}

export default CallToAction;
