import templateImage from '../assets/images/template.jpg';

function TemplatesHomeHeading() {
    return (
        <div className="templates-home-heading">
            <div className="row text-center">
                <h3>Professionally designed templates</h3>
                <p>Choose from oveer 5000 professional templates and give your website a great look</p>
            </div>
            <div className="d-flex justify-content-end">
                <p>VIEW ALL TEMPLATES</p>
            </div>
        </div>
    );
}

function TemplatesDisplay(){
    return(
        <div className="container templates">
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
            <div className="d-flex flex-row justify-content-around">
                <div className="justify-content-center template">
                    <img src={templateImage} alt="" />
                    <span>Education</span>
                </div>
                <div className="justify-content-center template">
                    <img src={templateImage} alt="" />
                    <span>Porfolio</span>
                </div>
                <div className="justify-content-center template">
                    <img src={templateImage} alt="" />
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
