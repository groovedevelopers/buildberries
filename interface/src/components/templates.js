import { Link } from 'react-router-dom';
import templateImage1 from '../assets/images/template-1.png';
import templateImage2 from '../assets/images/template-2.png';
import templateImage3 from '../assets/images/template-3.png';
import templateImage4 from '../assets/images/template-4.png';
import templateImage5 from '../assets/images/template-5.png';

function TemplatesHomeHeading() {
    return (
        <div className="templates-home-heading">
            <div className="row text-center">
                <h3>Professionally designed templates</h3>
                <p>Choose from oveer 5000 professional templates and give your website a great look</p>
            </div>
            <div className="d-flex justify-content-end">
                <Link href="/templates">VIEW ALL TEMPLATES</Link>
            </div>
        </div>
    );
}

function TemplatesDisplay(){
    return(
        <div className="container templates">
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
            <div className="d-flex flex-row justify-content-around">
                <div className="justify-content-center template">
                    <img src={templateImage4} alt="" />
                    <span>Education</span>
                </div>
                <div className="justify-content-center template">
                    <img src={templateImage5} alt="" />
                    <span>Porfolio</span>
                </div>
                <div className="justify-content-center template">
                    <img src={templateImage1} alt="" />
                    <span>Photography</span>
                </div>
            </div>
        </div>
    );
}

export {
    TemplatesHomeHeading, 
    TemplatesDisplay
};
