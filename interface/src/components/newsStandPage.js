
const NewsStandPage = () => {
    return (
        <div className="container news-stand-page">
			<div className="d-flex flex-column news-stand-page-body">
			
				<div className="d-flex flex-column news-stand-page-hero">
					<div>
						<h2>A good website makes<br/>a good business</h2>
						<p>Lets show you why you should<br/>build here</p>
					</div>
				</div>

                <div>
                    <h3>Mikos and their 671 million dollar web curl investment</h3>
                    <p>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                        esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                        Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
                        aute id deserunt nisi.
                    </p>
                </div>

                <div>
                    <h3>Trending today</h3>
                    <div className="d-flex flex-row justify-content-between">
                        <div>
                            {/* SPACE FOR IMAGE */}
                        </div>
                        <div>
                            <h4>All new tech driven cms system by Groove developers is absolutely beautiful</h4>
                            <p>
                                Aliqua id fugiat nostrud irure ex duis
                                ea quis id quis ad et. Sunt qui esse
                                pariatur duis deserunt mollit dolore...
                            </p>
                            <div className="d-flex flex-row justify-content-between">
                                <span>2 days ago by Avi sahra</span>
                                <span>View article</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p>Load more articles</p>
                </div>

                <div className="d-flex flex-row justify-content-between">
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
                        <form>
                            <input type="text" className="form-control" />
                            <textarea></textarea>
                            <button className="btn btn-lg btn-primary">Create Store</button>
                        </form>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default NewsStandPage;
