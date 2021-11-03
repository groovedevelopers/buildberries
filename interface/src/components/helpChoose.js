function HelpChoose(props) {
	return(
		<div className="d-flex flex-column justify-content-center align-items-center templates-help">
			<h3>Want help picking a  { props.choiceTitle }?</h3>
			<p>This will help you get some <br/> starting ideas and tips</p>

			<button className="btn btn-lg btn-primary">Help Me Choose</button>
		</div>
	);
}

export default HelpChoose;
