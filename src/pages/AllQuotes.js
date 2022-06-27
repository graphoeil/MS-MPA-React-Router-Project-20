// Imports
import React, { useEffect } from "react";
import QuotesList from "../components/quotes/QuotesList";
import useHttp from "../hooks/useHttp";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

// Component
const AllQuotes = () => {

	// Get all quotes
	const { sendRequest, status, data:loadedQuotes, error } = useHttp(getAllQuotes, true);
	useEffect(() => {
		sendRequest();
	},[sendRequest]);

	// Returns
	if (status === 'pending'){
		return <div className="centered">
			<LoadingSpinner/>
		</div>;
	}
	if (error){
		return <div className="centered">
			<p>{ error }</p>
		</div>;
	}
	if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === '0')){
		<NoQuotesFound/>
	}
	return <QuotesList quotes={ loadedQuotes }/>;

};

// Export
export default AllQuotes;