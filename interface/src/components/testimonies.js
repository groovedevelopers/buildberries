import TestimonyPic from '../assets/images/testimony-1.png';

const Testimonies = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center testimonies">
            <h3 className="text-center">Here are some of our <br/> customers testimonies</h3>
            <div className="testimony">
                <img src={TestimonyPic} alt="customer testimony" />
                <p>
                    GD has helped my business
                    grow tremedously over the last
                    few weeks of use. I have access
                    to customer analysis like never
                    before
                </p>
            </div>
        </div>
    );
}

export default Testimonies;