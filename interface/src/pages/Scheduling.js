import Navbar from "../components/navbar";
import { PageHeader } from "../components/utils/pageHeader";
import SchedulingPage from "../components/schedulingPage";
import { Footer } from "../components/footer";

const Scheduling = () => {
    return (
        <>
            <Navbar />
            <PageHeader headerTitle="Scheduling" />
            <SchedulingPage />
            <Footer />
        </>
    );
};

export default Scheduling;
