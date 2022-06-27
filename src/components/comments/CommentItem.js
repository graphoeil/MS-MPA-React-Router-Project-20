// Imports
import React from "react";
import styled from "styled-components";

// Component
const CommentItem = ({ text }) => {

	// Return
	return(
		<Wrapper>
			<p>{ text }</p>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.li`
	margin: 1rem 0;
	color: #4a5555;
	font-size: 1.25rem;
	padding-bottom: 0.5rem;
	border-bottom: 2px solid teal;
`;

// Export
export default CommentItem;