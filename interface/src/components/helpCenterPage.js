import HelpImage1 from '../assets/images/template-1.png';
import HelpImage2 from '../assets/images/template-2.png';
import RightArrow from '../assets/images/icons/right-arrow.svg';

const HelpCenterPage = () => {
    return (
        <div className="container help-center-page">
			<div className="d-flex flex-column help-center-page-body">
			
				<div className="help-center-page-heading">
					<div>
						<h2>Help center</h2>
						<p>
                            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                            esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                        </p>
                            
                        <form>
                            <input type="text" className="form-control" placeholder="Search for your question" />
                            <span className="text-center"><i className="fa fa-search"></i></span>
                        </form>
					</div>
				</div>

                <div className="articles">
                    <h3>Articles</h3>
                    <div className="d-flex flex-row justify-content-between article">
                        <div>
                            <img src={HelpImage1} alt="Article" />
                        </div>
                        <div className="d-flex flex-column justify-content-between article-body">
                            <div>
                                <h4>How to use: Business growth tools</h4>
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
                    <div className="d-flex flex-row justify-content-between article">
                        <div>
                            <img src={HelpImage2} alt="Article" />
                        </div>
                        <div className="d-flex flex-column justify-content-between article-body">
                            <div>
                                <h4>All new SEO features</h4>
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

                    <div className="text-center more-articles">
                        <a href="/">Load more articles <img src={RightArrow} alt="Right arrow" /></a>
                    </div> 
                </div>

                <div className="answers">
                    <h4>Find answers</h4>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Domains
                                </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Web templates
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Scheduling
                                </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>					  
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Email marketing
                                </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Cloud storage
                                </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Hire an expert
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Affiliates
                                </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>					  
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Point of sales
                                </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default HelpCenterPage;
