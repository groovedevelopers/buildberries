
import Navbar from '../components/navbar';
import { PageHeader } from '../components/utils/pageHeader';
import CareersPage from '../components/careers';
import { Footer } from '../components/footer';


const Careers = () => {
    return (
        <>
            <Navbar isIndex="0" />
            <PageHeader headerTitle="Careers" />
            <CareersPage />
            <Footer />
        </>
    );
}

export default Careers;
