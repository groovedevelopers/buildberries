import { Link } from 'react-router-dom';
import HeroImage from '../assets/images/hero_2_bg.png';
import HeroPhone from '../assets/images/hero_2_phone.png';

const Hero = () => {
    return (
        <div className="container hero">
            <div className="row">
                <div className="text-center">
                    <h2>Create Your Own <br/> Website Now.</h2>
                    <p>Make your idea a reality with <br/> our custom web templates</p>
                    <Link to="/create-account">
                    <button type="button" className="btn btn-primary btn-lg">Get Started</button>
                    </Link>
                </div>
            </div>
            <div className="row hero-2">
                <img src={HeroImage} alt="Background" />
                <img src={HeroPhone} alt="Background phone" />
            </div>
        </div>
    );
}

export default Hero;
