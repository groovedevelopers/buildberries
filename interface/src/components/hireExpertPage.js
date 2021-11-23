import EmployeePhoto1 from '../assets/images/employee-1.png';

const HireExpertPage = () => {
	return (
        <>
        <div className="container-flex d-flex flex-column bg-image hire-expert-page hire-expert-page-hero">
            <div>
                <h2>Hire an expert to grow <br/>your business website</h2>
                <p>From designing to promoting and
                managing your website, hire an industry
                professional to help</p>
                <button className="btn btn-lg btn-primary">Hire Expert</button>
            </div>
        </div> 
		<div className="container hire-expert-page">           

			<div className="d-flex flex-column justify-content-around hire-expert-page-body">
                <div className="d-flex flex-row justify-content-around statistics">
                    <div className="statistics-item">
                        <h1>770K+</h1>
                        <p>Designed websites</p>
                    </div>
                    <div className="statistics-item">
                        <h1>40K+</h1>
                        <p>Registered users</p>
                    </div>
                    <div className="statistics-item">
                        <h1>40K+</h1>
                        <p>Templates</p>
                    </div>
                </div>

                <div className="explore-services">
                    <h3>Explore services for every stage of your business</h3>
                    <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                        esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                        Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
                        aute id deserunt nisi.</p>
                </div>

                <div className="row from-people">
                    <h3>What people are saying</h3>
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

                <div className="hiw">
                    <h3>How it works</h3>
                    <ol>
                        <li>
                            <h4>Submit a request</h4>
                            <p>
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum
                                minim tempor enim. Elit aute irure tempor cupidatat
                                incididunt sint deserunt ut voluptate aute id deserunt nisi.
                            </p>
                        </li>
                        <li>
                            <h4>Discuss your wants</h4>
                            <p>
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum
                                minim tempor enim. Elit aute irure tempor cupidatat
                                incididunt sint deserunt ut voluptate aute id deserunt nisi.
                            </p>
                        </li>
                        <li>
                            <h4>Get project done</h4>
                            <p>
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum
                                minim tempor enim. Elit aute irure tempor cupidatat
                                incididunt sint deserunt ut voluptate aute id deserunt nisi.
                            </p>
                        </li>
                    </ol>
                </div>
			</div>
		</div>

        <div className="container-fluid d-flex flex-row justify-content-around align-items-center hire-expert-foot">
            <div>
                <h4>
                    Get yourself a pro to<br/>
                    handle your website
                </h4>		
                <p>Make the experience special for your
                customers with specialised mails</p>	
            </div>
            <div>
                <button className="btn btn-lg btn-primary">Hire Expert</button>
            </div>
        </div>
        </>
	);
}

export default HireExpertPage;
