
import Navbar from '../components/navbar';
import { PageHeader } from '../components/utils/pageHeader';
import AboutPage from '../components/about';
import { Footer } from '../components/footer';


function About() {
	return (
		<>
			<Navbar />
			<PageHeader headerTitle="About" />
			<AboutPage />
			<Footer />
		</>
	);
}

export default About;
