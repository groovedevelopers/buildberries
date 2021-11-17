const AffilatesPage = () => {
    return (
        <div className="container affilates-page">

            <div className="d-flex flex-column bg-image affiliates-page-hero">
				<div>
					<h2>Make money promoting <br/>us today</h2>
					<p>Lets show you why you should <br/>promote us</p>
					<button className="btn btn-lg btn-primary">See Available Positions</button>
				</div>
            </div>

            <div className="d-flex flex-column affiliates-page-body">
                <div>
                    <h3>How it works</h3>
                    <div>
                    	<div className="row">
                            <div className="col-md-4 hiw-item">
                                <h6>Register with us</h6>
                            </div>
                            <div className="col-md-4 hiw-item">
                                <h6>Promote GD</h6>
                            </div>
                            <div className="col-md-4 hiw-item">
                                <h6>Earn cool bucks</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 hiw-item">
                                <h6>Monitor analytics</h6>
                            </div>
                            <div className="col-md-4 hiw-item">
                                <h6>Record business metrics</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="offer">
                    <h3>We offer you</h3>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
					  <div className="accordion-item">
					    <h2 className="accordion-header" id="flush-headingOne">
					      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          <i className="fa fa-arrow"></i>
						  $100 Per conversion
					      </button>
					    </h2>
					    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
					      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
					    </div>
					  </div>
					  <div className="accordion-item">
					    <h2 className="accordion-header" id="flush-headingTwo">
					      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Unlimited referrals
					      </button>
					    </h2>
					    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
					      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
					    </div>
					  </div>
					  <div className="accordion-item">
					    <h2 className="accordion-header" id="flush-headingThree">
					      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Creative resources
					      </button>
					    </h2>
					    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
					      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
					    </div>
					  </div>					  
					  <div className="accordion-item">
					    <h2 className="accordion-header" id="flush-headingThree">
					      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Insightful dashboard
					      </button>
					    </h2>
					    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
					      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
					    </div>
					  </div>
					</div>
                </div>

                <div className="d-flex flex-row justify-content-between align-items-center become-affiliates">
					<div>
						<h4>
                            Get started being a GD<br/>
							affiliate today
						</h4>		
						<p>Earn money just promoting GD
                            products across the globe,
                            nothing more.</p>	
					</div>
					<div>
						<button className="btn btn-lg btn-primary">Become an Affiliate</button>
					</div>
				</div>

            </div>

        </div>
    );
};

export default AffilatesPage;
