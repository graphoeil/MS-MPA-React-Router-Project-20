// Imports
import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/useHttp";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/ui/LoadingSpinner";

// Component
const QuoteDetail = () => {

	// Where are we (nested routes) => useRouteMatch
	const { path, url } = useRouteMatch();

	// Quote id
	const { quoteId } = useParams();

	// Quote detail
	const { sendRequest, status, data:loadedQuote, error } = useHttp(getSingleQuote, true);
	useEffect(() => {
		sendRequest(quoteId);
	},[sendRequest, quoteId]);

	// Returns
	if (status === 'pending'){
		return <div className="centered">
			 <LoadingSpinner/>
		</div>;
	}
	if (error){
		return <p className="centered">{ error }</p>;
	}
	if (!loadedQuote.text){
		return <p className="centered">No quote found!</p>;
	}
	return(
		<React.Fragment>
			<HighlightedQuote { ...loadedQuote }/>
			{/* Load comments only appear in /quotes/:quoteId */}
			{/* Here we use useRouteMatch hooks to get the path where 
			this nested route is render, it's useful, because if we change 
			the path in App.js (ex. /quotes became /quote) then we 
			don't have to modify all our nested routes */}
			<Route path={ path } exact>
				<div className="centered">
					<Link className="btn--flat" to={ `${ url }/comments` }>
						Load comments
					</Link>
				</div>
			</Route>
			{/* Comments, nested route, inside quote detail, 
			or path="/quotes/:quoteId/comments" */}
			<Route path={ `${ path }/comments` } exact>
				<Comments/>
			</Route>
			{/* Comments */}
		</React.Fragment>
	);

};

// Export
export default QuoteDetail;