import Navbar from "../components/navbar";
import { PageHeader } from "../components/utils/pageHeader";
import DomainsPage from "../components/domainsPage";
import { Footer } from "../components/footer";

const Domains = () => {
    return (
        <>
            <Navbar />
            <PageHeader headerTitle="Domains" />
            <DomainsPage />
            <Footer />
        </>
    );
};

export default Domains;
