import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Products from "../components/products";
import { TemplatesHomeHeading, TemplatesDisplay } from "../components/templates";
import CallToAction from '../components/callToAction';
import Testimonies from "../components/testimonies";
import { FooterCTA, Footer } from "../components/footer";

function Home() {
    return (
        <>
            <div className="navbar-hero bg-image">
                <Navbar isIndex="1" />
                <Hero />
            </div>
            <Products />
            <TemplatesHomeHeading />
            <TemplatesDisplay />
            <CallToAction />
            <Testimonies />
            <FooterCTA />
            <Footer />
        </>
    );
}

export default Home;
