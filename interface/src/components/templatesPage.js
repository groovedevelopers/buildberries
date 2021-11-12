function TemplatesPageHeader() {
	return (
		<div className="container templates-div">
			<div className="d-flex flex-row justify-content-between page-header">
				<h4>Pick a template you love</h4>
				<input type="text" placeholder="Search templates" className="form-control" />
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

			<div className="d-flex flex-column filter">
				<h5>Build a website</h5>
				<div className="d-flex flex-row filter-options">
					<span className="active">All</span>
					<span>Consultancy</span>
					<span>Business Management</span>
					<span>Office Administration</span>
				</div>	
			</div>
				
		</div>
	);
}

export default TemplatesPageHeader;
