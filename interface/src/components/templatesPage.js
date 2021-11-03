function TemplatesPageHeader() {
	return (
		<div className="container templates-div">
			<div className="d-flex flex-row justify-content-between page-header">
				<h4>Pick a template you love</h4>
				<input type="text" placeholder="Search templates" />
			</div>
			<div className="dropdown-menus d-flex flex-row justify-content-start">
				<div class="dropdown">
					<p class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Online Store
					</p>
					<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a class="dropdown-item" href="/">Action</a>
						<a class="dropdown-item" href="/">Another action</a>
						<a class="dropdown-item" href="/">Something else here</a>
					</div>
				</div>
				<div class="dropdown">
					<p class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Business
					</p>
					<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a class="dropdown-item" href="/">Action</a>
						<a class="dropdown-item" href="/">Another action</a>
						<a class="dropdown-item" href="/">Something else here</a>
					</div>
				</div>
				<div class="dropdown">
					<p class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Design
					</p>
					<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a class="dropdown-item" href="/">Action</a>
						<a class="dropdown-item" href="/">Another action</a>
						<a class="dropdown-item" href="/">Something else here</a>
					</div>
				</div>
				<div class="dropdown">
					<p class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Education
					</p>
					<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a class="dropdown-item" href="/">Action</a>
						<a class="dropdown-item" href="/">Another action</a>
						<a class="dropdown-item" href="/">Something else here</a>
					</div>
				</div>
			</div>

			<div className="d-flex flex-column">
				<h4>Build a website</h4>
				<div className="d-flex flex-row">
					<button className="btn btn-default">All</button>
					<button className="btn btn-default">Consultancy</button>
					<button className="btn btn-default">Business Management</button>
					{/*<button className="btn btn-default"></button>*/}
				</div>	
			</div>
				
		</div>
	);
}

export default TemplatesPageHeader;
