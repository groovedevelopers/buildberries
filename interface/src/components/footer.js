import { Link } from 'react-router-dom';

function FooterCTA() {
    return (
        <div className="row cta">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h2>Ready to create <br/> your website?</h2>
                <button className="btn btn-lg btn-primary">Try it Now</button>
            </div>
        </div>
    );
}

function Footer() {
    return(
        <div className="container-fluid footer">
            <div className="d-flex flex-row justify-content-around">
                <div>
                    <h3>Domain</h3>
                    <ul>
                        <li><Link to="/domains">Domains</Link></li>
                        <li><Link to="/templates">Web Templates</Link></li>
                        <li><Link to="/online-store">Online Stores</Link></li>
                        <li><Link to="/point-of-sales">Point of Sales</Link></li>
                        <li><Link to="/email-marketing">Email Marketing</Link></li>
                        <li><Link to="/professional-email">Professional Email</Link></li>
                        <li><Link to="/scheduling">Scheduling</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/press-and-media">Press and Media</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/affiliates">Affiliates</Link></li>
                        <li><Link to="/cookies">Cookies</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>GD</h3>
                    <ul>
                        <li><Link to="/">English</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Community</h3>
                    <ul>
                        <li><Link to="/hire-an-expert">Hire an Expert</Link></li>
                        <li><Link to="/forum">Forum</Link></li>
                        <li><Link to="/webinars">Webinars</Link></li>
                        <li><Link to="/help-and-support">Help and Support</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/gd-news-stand">GD News Stand</Link></li>
                    </ul>
                </div>
            </div>            
            <div className="d-flex flex-row justify-content-center align-items-center copyright">
                <div>
                    <div>
                        <Link to="/support">Support</Link>
                        <Link to="/terms-of-service">Terms of Service</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>
                    <p>&copy; 2021 GD Groups</p>
                </div>
                <div>
                    <i className="">Icon</i>
                    <i className="">Icon</i>
                    <i className="">Icon</i>
                    <i className="">Icon</i>
                </div>
            </div>
        </div>
    );
}

export { 
    FooterCTA, 
    Footer 
};
