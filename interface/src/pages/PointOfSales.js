import Navbar from "../components/navbar";
import { PageHeader } from "../components/utils/pageHeader";
import PointOfsalesPage from "../components/pointOfSalesPage";
import { Footer } from "../components/footer";

const PointOfsales = () => {
    return (
        <>
            <Navbar />
            <PageHeader headerTitle="Point of sales" />
            <PointOfsalesPage />
            <Footer />
        </>
    );
};

export default PointOfsales;
