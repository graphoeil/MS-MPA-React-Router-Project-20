// Imports
import React from "react";
import styled from "styled-components";

// Component
const HighlightedQuote = ({ text, author }) => {

	// Return
	return(
		<Wrapper>
			<p>{ text }</p>
			<figcaption>{ author }</figcaption>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.figure`
	background-color: #162b2b;
	color: white;
	border-radius: 6px;
	padding: 3rem;
	margin: 3rem auto;
	width: 90%;
	max-width: 40rem;
	p{
		font-size: 2.5rem;
	}
	figcaption{
		font-style: italic;
		font-size: 1.5rem;
		text-align: right;
		color: #a1e0e0;
	}
`;

// Export
export default HighlightedQuote;