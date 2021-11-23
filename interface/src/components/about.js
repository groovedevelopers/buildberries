import TeamPhoto1 from '../assets/images/team-1.png';
import TeamPhoto2 from '../assets/images/team-2.png';
import TeamPhoto3 from '../assets/images/team-3.png';

const AboutPage = () => {
	return (
		<>
			
		<div className="container-fluid about-page-heading">
			<div className="about-page-hero bg-image">
				<h2>A good website makes <br/>a good business</h2>
				<p>Lets show you why you should <br/>build here</p>
			</div>
		</div>
		<div className="container about-page">

			<div className="d-flex flex-column about-page-body">
				<div>
					<p className="pt-5">
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br/>
						sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br/>
						consequat sunt nostrud amet.
					</p>
					<h3>Our history</h3>
					<p>
						Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
						esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
						Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
						aute id deserunt nisi.
					</p>	
					<p>
						Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
						esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
						Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
						aute id deserunt nisi.
					</p>
				</div>

				<div className="d-flex flex-column team">
					<h3>Our team</h3>
					<div className="d-flex flex-row text-center">
						<div className="team-member">
							<img src={TeamPhoto1} alt="Team member" />
							<p>Groovy Wale</p>
							<span>Founder</span>
						</div>
						<div className="team-member">
							<img src={TeamPhoto2} alt="Team member" />
							<p>Groovy Wale</p>
							<span>Founder</span>
						</div>
						<div className="team-member">
							<img src={TeamPhoto3} alt="Team member" />
							<p>Groovy Wale</p>
							<span>Founder</span>
						</div>
						<div className="team-member">
							<img src={TeamPhoto1} alt="Team member" />
							<p>Groovy Wale</p>
							<span>Founder</span>
						</div>
						<div className="team-member">
							<img src={TeamPhoto2} alt="Team member" />
							<p>Groovy Wale</p>
							<span>Founder</span>
						</div>
					</div>
				</div>

				<div className="col-md-8 questions-section">
					<h3>Have questions?<br/>Here are some answers</h3>
					<div className="accordion accordion-flush" id="accordionFlushExample">
					  <div className="accordion-item">
					    <h2 className="accordion-header" id="flush-headingOne">
					      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
					        What is online marketing?
					      </button>
					    </h2>
					    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
					      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
					    </div>
					  </div>
					  <div className="accordion-item">
					    <h2 className="accordion-header" id="flush-headingTwo">
					      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
					        How does it work?
					      </button>
					    </h2>
					    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
					      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
					    </div>
					  </div>
					  <div className="accordion-item">
					    <h2 className="accordion-header" id="flush-headingThree">
					      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
					        How much does a domain cost?
					      </button>
					    </h2>
					    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
					      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
					    </div>
					  </div>					  
					  <div className="accordion-item">
					    <h2 className="accordion-header" id="flush-headingFour">
					      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
					        Will I surely sell my products?
					      </button>
					    </h2>
					    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
					      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
					    </div>
					  </div>
					</div>
				</div>

				<div className="d-flex flex-row justify-content-around align-items-center statistics">
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

				<div className="privacy-policy" id="privacy-policy">
					<h3>Privacy Policy</h3>
					<p>
						Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
						qui esse pariatur duis deserunt mollit dolore cillum minim
						tempor enim. Elit aute irure tempor cupidatat incididunt sint
						deserunt ut voluptate aute id deserunt nisi.
					</p>
					<p>
						Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
						qui esse pariatur duis deserunt mollit dolore cillum minim
						tempor enim. Elit aute irure tempor cupidatat incididunt sint
						deserunt ut voluptate aute id deserunt nisi.
					</p>	
				</div>

				<div className="terms" id="terms">
					<h3>Terms of Service</h3>
					<p>
						Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
						qui esse pariatur duis deserunt mollit dolore cillum minim
						tempor enim. Elit aute irure tempor cupidatat incididunt sint
						deserunt ut voluptate aute id deserunt nisi.
					</p>
					<p>
						Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
						qui esse pariatur duis deserunt mollit dolore cillum minim
						tempor enim. Elit aute irure tempor cupidatat incididunt sint
						deserunt ut voluptate aute id deserunt nisi.
					</p>	
				</div>

			</div>
		</div>
		</>
	);
}

export default AboutPage;
