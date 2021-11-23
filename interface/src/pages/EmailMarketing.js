import Navbar from "../components/navbar";
import { PageHeader } from "../components/utils/pageHeader";
import EmailMarketingPage from "../components/emailMarketingPage";
import { Footer } from "../components/footer";

const EmailMarketing = () => {
    return (
        <>
            <Navbar isIndex="0" />
            <PageHeader headerTitle="Email Marketing" />
            <EmailMarketingPage />
            <Footer />
        </>
    );
};

export default EmailMarketing;

