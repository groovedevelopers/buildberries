import Navbar from '../components/navbar';
import { PageHeader } from '../components/utils/pageHeader';
import HireExpertPage from '../components/hireExpertPage';
import { Footer } from '../components/footer';

const HireExpert = () => {
    return (
        <>
            <Navbar />
            <PageHeader headerTitle="Hire a pro to handle your website" />
            <HireExpertPage />
            <Footer />        
        </>
    );
};

export default HireExpert;
