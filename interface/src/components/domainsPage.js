const DomainsPage = () => {
    return (
        <div className="container domains-page">

            <div className="search-section">
                <h3>Search for a free domain today<br/></h3>
                <input type="text" placeholder="Find a domain you want" />
            </div>

            <div>
                <h3>We offer you</h3>
                <div>
                    <h4>Domain Security</h4>
                    <p>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                        Sunt qui esse pariatur duis deserunt mollit dolore cillum
                        minim tempor enim. Elit aute irure tempor cupidatat
                        incididunt sint deserunt ut voluptate aute id deserunt nisi.
                    </p>
                </div>
                <div>
                    <h4>Free web hosting</h4>
                    <p>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                        Sunt qui esse pariatur duis deserunt mollit dolore cillum
                        minim tempor enim. Elit aute irure tempor cupidatat
                        incididunt sint deserunt ut voluptate aute id deserunt nisi.
                    </p>
                </div>
                <div>
                    <h4>24/7 support</h4>
                    <p>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                        Sunt qui esse pariatur duis deserunt mollit dolore cillum
                        minim tempor enim. Elit aute irure tempor cupidatat
                        incididunt sint deserunt ut voluptate aute id deserunt nisi.
                    </p>
                </div>
            </div>

            <div className="d-flex flex-row justify-content-between find-domain">
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

        </div>
    );
};

export default DomainsPage;
