// Imports
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/useHttp";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../ui/LoadingSpinner";
import CommentsList from "./CommentsList";

// Component
const Comments = () => {

	// Is adding comment
	const [isAddingComment, setIsAddingComment] = useState(false);

	// Start adding comment, show NewCommentForm
	const startAddingComment = () => {
		setIsAddingComment(true);
	};

	// Get quoteID form url
	const { quoteId } = useParams();

	// Get all comments when ...
	const { sendRequest, status, data:loadedComments } = useHttp(getAllComments);
	useEffect(() => {
		sendRequest(quoteId);
	},[quoteId, sendRequest]);

	// Comment is added to firebase, remove form
	const commentAdded = useCallback(() => {
		setIsAddingComment(false);
		sendRequest(quoteId);
	},[sendRequest, quoteId]);

	// Comments
	let comments;
	if (status === 'pending'){
		comments = <div className="centered">
			<LoadingSpinner/>
		</div>;
	}
	if (status === 'completed' && (loadedComments && loadedComments.length > 0)){
		comments = <CommentsList comments={ loadedComments }/>
	}
	if (status === 'completed' && (!loadedComments || loadedComments.length === 0)){
		comments = <p className="centered">No comments where added yet!</p>
	}
	return(
		<Wrapper>
			<h2>User Comments</h2>
			{
				!isAddingComment ? <button className="btn" onClick={ startAddingComment }>
					Add a Comment
				</button> : <NewCommentForm quoteId={ quoteId } commentAdded={ commentAdded }/>
			}
			{ comments }
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.section`
	text-align: center;
	button{
		font-size: 1.25rem;
	}
`;

// Export
export default Comments;