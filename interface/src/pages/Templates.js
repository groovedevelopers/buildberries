import Navbar from '../components/navbar';
import TemplatesPageHeader from '../components/templatesPage';
import { TemplatesDisplay } from '../components/templates';
import Pagination from '../components/pagination';
import HelpChoose from '../components/helpChoose';
import { Footer } from '../components/footer';

function Templates() {
	return (
		<div className="App">
			<Navbar />
			<TemplatesPageHeader />
			<TemplatesDisplay />
			<Pagination />
			<HelpChoose choiceTitle="website template" />
			<Footer />
		</div>
	);
}

export default Templates;
