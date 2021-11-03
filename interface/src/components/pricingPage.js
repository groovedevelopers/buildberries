const PricingBody = () => {
	return (
		<div className="container pricing-page-body">
			<h5 className="text-primary">Theres a plan for every business</h5>
			<div className="d-flex flex-row justify-content-between">
				<div className="pricing-div">
					<i></i>
					<h4>Basic</h4>
					<ul>
						<li>Create unlimited</li>
						<li>Free templates</li>
						<li>Free sign up</li>
						<li>Cancel anytime</li>
					</ul>
					<button className="btn btn-lg btn-primary">Choose this plan</button>
				</div>
				<div className="pricing-div">
					<i></i>
					<span>Popular</span>
					<h4>Premium</h4>
					<ul>
						<li>Billed yearly @ $30/month</li>
						<li>Import analytics Ranges</li>
						<li>Create unlimited ranges</li>
						<li>Access to 900+ GTO ranges</li>
						<li>Weighted ranges</li>
						<li>Cancel anytime</li>
					</ul>
					<button className="btn btn-lg btn-primary">Choose this plan</button>
				</div>
				<div className="pricing-div">
					<i></i>
					<h4>Regular</h4>
					<ul>
						<li>Billed yearly @ $1 2 /month</li>
						<li>Import PioSolver Ranges</li>
						<li>Create unlimited ranges</li>
						<li>Weighted ranges</li>
						<li>Cancel anytime</li>
					</ul>
					<button className="btn btn-lg btn-primary">Choose this plan</button>
				</div>
			</div>
		</div>
	);
}

export {
	PricingBody
};
