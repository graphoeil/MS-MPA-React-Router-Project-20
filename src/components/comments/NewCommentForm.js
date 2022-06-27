// Imports
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import useHttp from "../../hooks/useHttp";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../ui/LoadingSpinner";

// Component
const NewCommentForm = ({ commentAdded, quoteId }) => {

	// Uncontrolled form
	const commentTextRef = useRef();

	// Submit form
	const { sendRequest, status, error } = useHttp(addComment);
	const handleSubmit = (e) => {
		e.preventDefault();
		// Validating
		const text = commentTextRef.current.value;
		if (!text.trim()){
			return;
		}
		// Send to server
		sendRequest({ commentData:text, quoteId });
	};

	// Send to firebase complete
	useEffect(() => {
		if (status === 'completed' && !error){
			// Back to parent Comment.js
			commentAdded();
		}
	},[status, error, commentAdded]);

	// Return
	return(
		<Wrapper onSubmit={ handleSubmit }>
			{
				status === 'pending' && <div className="centered">
					<LoadingSpinner/>
				</div>
			}
			<div className="controlComments">
				<label htmlFor='comment'>Your Comment</label>
				<textarea id='comment' rows='5' ref={ commentTextRef }></textarea>
			</div>
			<div className="actionsComments">
				<button type="submit" className='btn'>
					Add Comment
				</button>
			</div>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.form`
	margin-top: 1rem;
	position: relative;
	text-align: center;
	.loading{
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.controlComments{
		margin-bottom: 0.5rem;
		label{
			font-weight: bold;
			display: block;
			margin-bottom: 0.5rem;
		}
		textarea{
			font: inherit;
			padding: 0.35rem;
			border-radius: 4px;
			background-color: #f0f0f0;
			border: 1px solid #c1d1d1;
			display: block;
			width: 100%;
			font-size: 1.25rem;
			&:focus{
				background-color: #cbf8f8;
				outline-color: teal;
			}
		}
	}
	.actionsComments{
		button{
			font-size: 1.25rem;
		}
	}
`;

// Export
export default NewCommentForm;