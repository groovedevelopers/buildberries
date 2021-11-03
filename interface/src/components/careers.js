function CareersPage() {
	return (
		<div className="container careers-page">
			<div className="d-flex flex-column careers-page-body">
			
				<div className="d-flex flex-column careers-page-header">
					<div>
						<h2>Come and work with us!</h2>
						<p>Join some of our finest teams <br/>across 4 different countries</p>
						<button className="btn btn-lg btn-primary">See Available Positions</button>
					</div>
				</div>

				<div>
					<h3>Our mission</h3>
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

				<div>
					<h3>Working with us</h3>
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

				<div className="row from-employees">
					<div className="col-md-4">
						<p>Ire Falowo</p>
						<p>Research and analytics</p>
					</div>
					<div className="col-md-8">
						<p>
							I t has been an amazing experience for my career to
							work with the GD team. Here we pay incredible
							attention to detail as well as making sure that all
							our staff are well catered for! It is an amazing
							atmosphere!
						</p>	
					</div>
				</div>

				<div className="d-flex flex-row justify-content-between inform-form">
					<div>
						<h4>
							Let us inform you once<br/>
							any positions are open
						</h4>		
						<p>Tell us your email and leave a<br/>
						message, we will contact you!</p>	
					</div>
					<div>
						<form action="/" className="d-flex flex-column justify-content-around">
							<input type="text" placeholder="Email" className="form-control" />
							<textarea name="" id="" cols="30" rows="4" placeholder="Message"></textarea>
							<button className="btn btn-lg btn-primary">Proceed</button>
						</form>
					</div>
				</div>

			</div>
		</div>
	);
}

export default CareersPage;
