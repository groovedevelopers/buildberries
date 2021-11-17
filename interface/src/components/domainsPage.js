const DomainsPage = () => {
    return (
        <>
        <div className="container domains-page">

            <div className="search-section">
                <h3>Search for a free domain today<br/></h3>
                <div>
                    <input type="text" placeholder="Find a domain you want" />
                    <span className="text-center"><i className="fa fa-search"></i></span>
                </div>
            </div>

            <div className="offer">
                <h3>We offer you</h3>
                <div>
                    <h4><i className="fa fa-twitter"></i>Domain Security</h4>
                    <p>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                        Sunt qui esse pariatur duis deserunt mollit dolore cillum
                        minim tempor enim. Elit aute irure tempor cupidatat
                        incididunt sint deserunt ut voluptate aute id deserunt nisi.
                    </p>
                </div>
                <div>
                    <h4><i className="fa fa-twitter"></i>Free web hosting</h4>
                    <p>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                        Sunt qui esse pariatur duis deserunt mollit dolore cillum
                        minim tempor enim. Elit aute irure tempor cupidatat
                        incididunt sint deserunt ut voluptate aute id deserunt nisi.
                    </p>
                </div>
                <div>
                    <h4><i className="fa fa-twitter"></i>24/7 support</h4>
                    <p>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                        Sunt qui esse pariatur duis deserunt mollit dolore cillum
                        minim tempor enim. Elit aute irure tempor cupidatat
                        incididunt sint deserunt ut voluptate aute id deserunt nisi.
                    </p>
                </div>
            </div>

        </div>

        <div className="container-fluid  bg-image d-flex flex-row justify-content-between align-items-center find-domain">
            <div>
                <h4>
                    Let us help you find the<br/>
                    domain for you
                </h4>		
                <p>Search the domain name you
                would like to use for your business</p>	
            </div>
            <div>
                <button className="btn btn-lg btn-primary">Find Domain</button>
            </div>
        </div>
        </>
    );
};

export default DomainsPage;
