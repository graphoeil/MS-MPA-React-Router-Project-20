// Imports
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Component
const NoQuotesFound = () => {

	// Return
	return(
		<Wrapper>
			<p>No quotes found!</p>
			<Link to="/new-quote" className='btn'>
				Add a Quote
			</Link>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.div`
	height: 20rem;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	p{
		color: #262c2c;
		font-size: 3rem;
		font-weight: bold;
	}
`;

// Export
export default NoQuotesFound;