import Navbar from "../components/navbar";
import { PageHeader } from "../components/utils/pageHeader";
import NewsStandPage from "../components/newsStandPage";
import { Footer } from "../components/footer";

const NewsStand = () => {
    return (
        <>
            <Navbar isIndex="0" />
            <PageHeader headerTitle="GD news and press" />
            <NewsStandPage />
            <Footer />
        </>
    );
};

export default NewsStand;
