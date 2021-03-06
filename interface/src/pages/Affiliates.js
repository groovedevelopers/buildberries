import Navbar from '../components/navbar';
import { PageHeader } from '../components/utils/pageHeader';
import AffilatesPage from '../components/affiliatesPage';
import { Footer } from '../components/footer';

const Affiliates = () => {
    return (
        <>
            <Navbar isIndex="0" />
            <PageHeader headerTitle="Become a GD Affilate" />
            <AffilatesPage />
            <Footer />        
        </>
    );
};

export default Affiliates;
