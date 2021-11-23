import TrendingImage1 from '../assets/images/template-1.png';
import TrendingImage2 from '../assets/images/template-2.png';
import RightArrow from '../assets/images/icons/right-arrow.svg';

const NewsStandPage = () => {
    return (
        <>
        <div className="container-fluid d-flex flex-column bg-image news-stand-page news-stand-page-hero">
            <div>
                <h2>A good website makes<br/>a good business</h2>
                <p>Lets show you why you should<br/>build here</p>
            </div>
        </div>
        <div className="container news-stand-page">
			<div className="d-flex flex-column news-stand-page-body">
                <div>
                    <h3>Mikos and their 671 million dollar web curl investment</h3>
                    <p>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                        esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                        Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
                        aute id deserunt nisi.
                    </p>
                </div>

                <div className="trending-today">
                    <h3>Trending today</h3>
                    <div className="d-flex flex-row justify-content-between trending-item">
                        <div>
                            <img src={TrendingImage1} alt="Trending cover" />
                        </div>
                        <div className="d-flex flex-column justify-content-between trending-item-body">
                            <div>
                                <h4>All new tech driven cms system by Groove developers is absolutely beautiful</h4>
                                <p>
                                    Aliqua id fugiat nostrud irure ex duis
                                    ea quis id quis ad et. Sunt qui esse
                                    pariatur duis deserunt mollit dolore...
                                </p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <span><b>2 days</b> ago by <b>Avi sahra</b></span>
                                <a href="/">View article <img src={RightArrow} alt="Right arrow" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between trending-item">
                        <div>
                            <img src={TrendingImage2} alt="Trending cover" />
                        </div>
                        <div className="d-flex flex-column justify-content-between trending-item-body">
                            <div>
                                <h4>All new tech driven cms system by Groove developers is absolutely beautiful</h4>
                                <p>
                                    Aliqua id fugiat nostrud irure ex duis
                                    ea quis id quis ad et. Sunt qui esse
                                    pariatur duis deserunt mollit dolore...
                                </p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <span><b>2 days</b> ago by <b>Avi sahra</b></span>
                                <a href="/">View article <img src={RightArrow} alt="Right arrow" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center more-articles">
                    <a href="/">Load more articles <img src={RightArrow} alt="Right arrow" /></a>
                </div>                
            </div>
        </div>
        <div className="container-fluid d-flex flex-row justify-content-around bg-image news-stand-foot">
            <div>
                <h4>
                    Join our community and<br/>
                    recieve our newsletter
                </h4>		
                <p>
                We will ensure you always get our
                emails and newsletters with our
                automated system
                </p>	
            </div>
            <div>
				<form action="/" className="d-flex flex-column justify-content-around">
					<input type="text" placeholder="Email" className="form-control" />
					<textarea name="" id="" cols="30" rows="2" placeholder="Message"></textarea>
					<button className="btn btn-lg btn-primary">Proceed</button>
				</form>
			</div>
        </div>
        </>
    );
};

export default NewsStandPage;
