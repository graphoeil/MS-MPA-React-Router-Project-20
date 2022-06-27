// Imports
import React from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";

// Component
const CommentsList = ({ comments }) => {

	// Return
	return(
		<Wrapper>
			{
				comments.map((comment) => {
					const { id, data:text } = comment;
					return <CommentItem key={ id } text={ text } />
				})
			}
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.ul`
	list-style: none;
	margin: 2.5rem 0;
	padding: 0;
`;

// Export
export default CommentsList;