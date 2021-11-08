import Navbar from "../components/navbar";
import { PageHeader } from "../components/utils/pageHeader";
import OnlineStorePage from "../components/onlineStorePage";
import { Footer } from "../components/footer";

const OnlineStore = () => {
    return (
        <>
            <Navbar />
            <PageHeader headerTitle="Your own online store" />
            <OnlineStorePage />
            <Footer />
        </>
    );
};

export default OnlineStore;
