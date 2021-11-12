import Navbar from '../components/navbar';
import { PricingBody } from '../components/pricingPage.js';
import { PageHeader } from '../components/utils/pageHeader';
import HelpChoose from '../components/helpChoose';
import { Footer } from '../components/footer';

function Pricing() {
	return (
		<>
			<Navbar isIndex="0" />
			<PageHeader headerTitle="Pick a package that suits you" />
			<PricingBody />
			<HelpChoose choiceTitle="payment plan" />
			<Footer />
		</>
	);
}

export default Pricing;
