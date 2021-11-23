import ChevronRight from '../assets/images/icons/chevron-right.svg';
import ChevronLeft from '../assets/images/icons/chevron-left.svg';
import ChevronsRight from '../assets/images/icons/chevrons-right.svg';
import ChevronsLeft from '../assets/images/icons/chevrons-left.svg';

const Pagination = () => {
	return(
		<div className="container pagination">
			<ul className="d-flex flex-row justify-content-center">
				<li><a href="/"><img src={ChevronsLeft} alt="" /></a></li>
				<li><a href="/"><img src={ChevronLeft} alt="" /></a></li>
				<li><a href="/1">1</a></li>
				<li><a href="/1">2</a></li>
				<li><a href="/1">3</a></li>
				<li><a href="/1">4</a></li>
				<li><a href="/1">5</a></li>
				<li><a href="/"><img src={ChevronRight} alt="" /></a></li>
				<li><a href="/"><img src={ChevronsRight} alt="" /></a></li>
			</ul>
		</div>
	);
}

export default Pagination;
