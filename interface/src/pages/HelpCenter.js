import Navbar from "../components/navbar";
import { PageHeader } from "../components/utils/pageHeader";
import HelpCenterPage from "../components/helpCenterPage";
import { Footer } from "../components/footer";

const HelpCenter = () => {
    return (
        <>
            <Navbar isIndex="0" />
            <PageHeader headerTitle="We are here for you, how can we help?" />
            <HelpCenterPage />
            <Footer />
        </>
    );
};

export default HelpCenter;
