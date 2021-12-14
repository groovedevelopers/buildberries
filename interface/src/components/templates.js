import { Link } from 'react-router-dom';
import templateImage1 from '../assets/images/template-1.png';
import templateImage2 from '../assets/images/template-2.png';
import templateImage3 from '../assets/images/template-3.png';
import templateImage4 from '../assets/images/template-4.png';
import templateImage5 from '../assets/images/template-5.png';

const TemplatesHomeHeading = () => {
    return (
        <div className="container templates-home-heading">
            <div className="row text-center">
                <h3>Professionally designed templates</h3>
                <p>Choose from oveer 5000 professional templates and give your website a great look</p>
            </div>
            <div className="d-flex justify-content-end">
                <Link to="/templates">VIEW ALL TEMPLATES</Link>
            </div>
        </div>
    );
}

const TemplatesDisplay = () => {
    return(
        <div className="container templates">
            <div className="d-flex flex-row justify-content-between">
                <div className="justify-content-center template">
                    <img src={templateImage1} alt="" />
                    <span><Link to="/templates">Online Store</Link></span>
                </div>
                <div className="justify-content-center template">
                    <img src={templateImage2} alt="" />
                    <span><Link to="/templates">Business</Link></span>
                </div>
                <div className="justify-content-center template">
                    <img src={templateImage3} alt="" />
                    <span><Link to="/templates">Design</Link></span>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between">
                <div className="justify-content-center template">
                    <img src={templateImage4} alt="" />
                    <span><Link to="/templates">Education</Link></span>
                </div>
                <div className="justify-content-center template">
                    <img src={templateImage5} alt="" />
                    <span><Link to="/templates">Porfolio</Link></span>
                </div>
                <div className="justify-content-center template">
                    <img src={templateImage1} alt="" />
                    <span><Link to="/templates">Photography</Link></span>
                </div>
            </div>
        </div>
    );
}

export {
    TemplatesHomeHeading, 
    TemplatesDisplay
};
