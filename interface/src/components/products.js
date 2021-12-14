import { Link } from 'react-router-dom';
import phoneImage from '../assets/images/home_products_phone.png';

function Products(){
    return(
        <div className="container bg-image products">
            <div className="d-flex flex-row justify-content-around align-items-center">
                <div className="products-left-text">
                    <h2>Sell your <br/> products online.</h2>
                    <p>Our E-commerce platform<br/>helps you market your<br/>products to the right people.</p>
                </div>
                <div>
                    <img src={phoneImage} alt="Phone" className="rounded phone-image" />
                </div>
                <div>
                    <p><Link to="/create-account">Try It</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Products;
