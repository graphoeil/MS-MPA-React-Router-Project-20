// Imports
import React from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";

// Component
const QuotesList = ({ quotes }) => {

	// Sorting method
	const sortQuotes = (quotes, ascending) => {
		return quotes.sort((quoteA, quoteB) => {
			if (ascending) {
				return quoteA.id > quoteB.id ? 1 : -1;
			} else {
				return quoteA.id < quoteB.id ? 1 : -1;
			}
		});
	};

	// Sorting the list
	// Naturally we could use useState for much simplicity :
	// const [isSortingAsc, setIsSortingAsc] = useState(true);
	// then in handleSorting, if (isSortingAsc){ setIsSortingAsc(false) } else ...
	const history = useHistory();
	const { pathname:path, search } = useLocation();
	const queryParams = new URLSearchParams(search);
	const isSortingAsc = queryParams.get('sort') === 'asc';
	const handleSorting = () => {
		// Update the url with sorting params => http://localhost:3000/quotes?sort=asc
		// pushing in history will make this page re-rendered ,-)
		history.push({
			pathname:path,
			search:`?sort=${ isSortingAsc ? 'desc' : 'asc' }`
		});
		// Or less readable in one line
		// history.push(`${ path }?sort=${ isSortingAsc ? 'desc' : 'asc' }`);
	};

	// Sorted quotes
	const sortedQuotes = sortQuotes(quotes, isSortingAsc);

	// Return
	return(
		<React.Fragment>
			<SortingWrapper>
				<button onClick={ handleSorting }>
					Sort { isSortingAsc ? 'descending' : 'ascending' }
				</button>
			</SortingWrapper>
			<ListWrapper>
				{
					sortedQuotes.map((quote) => {
						const { id } = quote;
						return <QuoteItem key={ id } { ...quote }/>
					})
				}
			</ListWrapper>
		</React.Fragment>
	);

};

// Styled
const SortingWrapper = styled.div`
	padding-bottom: 1rem;
	border-bottom: 3px solid #b2d4d4;
	margin-bottom: 2rem;
	button{
		font: inherit;
		color: teal;
		border: 1px solid teal;
		background-color: transparent;
		border-radius: 4px;
		padding: 0.5rem 1.5rem;
		cursor: pointer;
		&:hover{
			background-color: #c2fafa;
		}
	}
`;
const ListWrapper = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

// Export
export default QuotesList;