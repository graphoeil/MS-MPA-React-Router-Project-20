// Imports
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuotesForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/useHttp";
import { addQuote } from "../lib/api";

// Component
const NewQuote = () => {

	// Firebase custom hooks
	const { sendRequest, status } = useHttp(addQuote);

	// History, became useNavigate in v6
	const history = useHistory();

	// Add new quote
	const addQuoteHandler = (quote) => {
		// Send quote to firebase
		sendRequest(quote);
	};

	// Redirect when status from firebase is success
	useEffect(() => {
		// status defined in custom hooks reducer
		if (status === 'completed'){
			/* history.push allow user to go back, history.replace don't */
			history.replace('/quotes?sort=asc');
		}
	},[status, history]);

	// Return
	return <QuotesForm isLoading={ status === 'pending' } addQuote={ addQuoteHandler }/>

};

// Export
export default NewQuote;