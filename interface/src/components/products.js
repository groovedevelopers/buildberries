import phoneImage from '../assets/images/phone.jpg';

function Products(){
    return(
        <div className="container products">
            <div className="d-flex flex-row justify-content-around align-items-center">
                <div className="justify-content-center">
                    <h2>Sell your <br/> products online.</h2>
                    <p>Our E-commerce platform<br/>helps you market your<br/>products to the right people.</p>
                </div>
                <div className="justify-content-center">
                    <img src={phoneImage} alt="Phone" className="rounded phone-image" />
                </div>
                <div className="justify-content-center">
                    <p>Try It</p>
                </div>
            </div>
        </div>
    );
}

export default Products;
