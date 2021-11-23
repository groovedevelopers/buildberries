import EmployeePhoto1 from '../assets/images/employee-1.png';

const PointOfsalesPage = () => {
    return (
        <>
        <div className="container-fluid d-flex flex-column bg-image pos-page pos-page-hero">
            <div>
                <h2>Take your business on the<br/>road with GD POS</h2>
                <p>
                Accept in person payments at any location with a personal POS reader
                </p>
                <button className="btn btn-lg btn-primary">Shop for POS</button>
            </div>
        </div> 
		<div className="container pos-page">          

			<div className="d-flex flex-column pos-page-body">
                <div className="points">
                    <div>
                        <h4>Fully integrated system</h4>
                        <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit</p>
                    </div>
                    <div>
                        <h4>All software included</h4>
                        <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit</p>
                    </div>
                    <div>
                        <h4>No hidden fees</h4>
                        <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit</p>
                    </div>
                </div>

                <div className="hiw">
                    <h3>How it works</h3>
                    <div className="hiw-items">
                        <div>
                            <h4>Create your GD payment account</h4>
                            <p>
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum
                                minim tempor enim. Elit aute irure tempor cupidatat
                                incididunt sint deserunt ut voluptate aute id deserunt nisi.
                            </p>
                        </div>
                        <div>
                            <h4>Buy POS hardware</h4>
                            <p>
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum
                                minim tempor enim. Elit aute irure tempor cupidatat
                                incididunt sint deserunt ut voluptate aute id deserunt nisi.
                            </p>
                        </div>
                        <div>
                            <h4>Setup GD POS</h4>
                            <p>
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum
                                minim tempor enim. Elit aute irure tempor cupidatat
                                incididunt sint deserunt ut voluptate aute id deserunt nisi.
                            </p>
                        </div>
                        <div>
                            <h4>Start selling</h4>
                            <p>
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum
                                minim tempor enim. Elit aute irure tempor cupidatat
                                incididunt sint deserunt ut voluptate aute id deserunt nisi.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row from-merchants">
					<div className="col-md-4">
						<img src={EmployeePhoto1} alt="Employee" />
						<p>Ire Falowo</p>
						<span>Research and analytics</span>
					</div>
					<div className="col-md-8">
						<p className="justify-content-center aligh-items-center quote">
							<i className="fa fa-quote-left"></i>&nbsp;&nbsp;&nbsp;&nbsp;
							I t has been an amazing experience for my career to
							work with the GD team. Here we pay incredible
							attention to detail as well as making sure that all
							our staff are well catered for! It is an amazing
							atmosphere!
						</p>	
					</div>
				</div>
			</div>
		</div>

        <div className="container-fluid d-flex flex-row bg-image justify-content-around align-items-center pos-foot">
            <div>
                <h4>
                    Get a GD POS today and<br/>
                    deal on the move
                </h4>		
                <p>Make flexibility your business model, <br/>deal anywhere, anytime.</p>	
            </div>
            <div>
                <button className="btn btn-lg btn-primary">Shop for POS</button>
            </div>
        </div>
        </>
	);
};

export default PointOfsalesPage;
