import RightArrow from '../assets/images/icons/right-arrow.svg';


const EmailMarketingPage = () => {
    return (
        <>
        <div className="container-fluid email-marketing-page email-marketing-head">
            <div className="d-flex flex-column bg-image email-marketing-page-hero">
                <div>
                    <h2>Create professional mail campaigns</h2>
                    <p>Drive up traffic with engaging emails</p>
                    <button className="btn btn-lg btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        <div className="container email-marketing-page">
			<div className="d-flex flex-column email-marketing-page-body">

                <div>
                    <h3>Its the future of digital emailing</h3>
                    <p>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
                        pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute
                        irure tempor cupidatat incididunt sint deserunt ut voluptate aute id
                        deserunt nisi.
                    </p>
                </div>

                <div className="bullet-points">
                    <div className="d-flex align-items-start">
                        <img src={RightArrow} alt="Right arrow" />
                        <div>
                            <h4>Intuitive mail editor</h4>
                            <p>
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum
                                minim tempor enim. Elit aute irure tempor cupidatat
                                incididunt sint deserunt ut voluptate aute id deserunt nisi.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-start">
                        <img src={RightArrow} alt="Right arrow" />
                        <div>
                            <h4>Time saving automatic mailing</h4>
                            <p>
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum
                                minim tempor enim. Elit aute irure tempor cupidatat
                                incididunt sint deserunt ut voluptate aute id deserunt nisi.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-start">
                        <img src={RightArrow} alt="Right arrow" />
                        <div>
                            <h4>Complete analytics</h4>
                            <p>
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum
                                minim tempor enim. Elit aute irure tempor cupidatat
                                incididunt sint deserunt ut voluptate aute id deserunt nisi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid d-flex flex-row justify-content-around align-items-center email-marketing-foot">
            <div>
                <h4>
                    Get started with our<br/>
                    email marketing
                </h4>		
                <p>
                    Make the experience special for your
                    customers with specialised mails
                </p>	
            </div>
            <div>
                <button className="btn btn-lg btn-primary">Get Started</button>
            </div>
        </div>
        </>
    );
};

export default EmailMarketingPage;
