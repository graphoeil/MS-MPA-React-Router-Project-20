// Imports
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Prompt } from "react-router-dom";
import LoadingSpinner from "../ui/LoadingSpinner";

// Component
const QuotesForm = ({ isLoading, addQuote }) => {

	// Input ref
	const authorInputRef = useRef();
	const textInputRef = useRef();

	// Submit form
	const handleSubmit = (e) => {
		e.preventDefault();
		const author = authorInputRef.current.value;
		const text = textInputRef.current.value;
		// Empty string => falsey value
		if (!author.trim() || !text.trim()){
			return;
		}
		addQuote({ author, text });
	};

	// Add prompt to ask user if he really want quit the page
	/* !!!! Warning Prompt is deprecated in v6... custom modal ? */
	const [isEntered, setIsEntered] = useState(false);
	const handleFocus = () => {
		setIsEntered(true);
	};

	// Return
	return(
		<React.Fragment>
			{/* We show Prompt component when isEntered is true, 
			and when the user click on a link to quit the page */}
			<Prompt message={ () => {
				return 'Do you really want to quit ? All your data will be lost!';
			} } when={ isEntered }/>
			<Wrapper className="card" onSubmit={ handleSubmit } onFocus={ handleFocus }>
				{
					isLoading && <div className="loading">
						<LoadingSpinner />
					</div>
				}
				<div className="controlQuotes">
					<label htmlFor='author'>Author</label>
					<input type='text' id='author' ref={ authorInputRef } />
				</div>
				<div className="controlQuotes">
					<label htmlFor='text'>Text</label>
					<textarea id='text' rows='5' ref={ textInputRef } />
				</div>
				<div className="actionsQuotes">
					<button type="submit" className='btn' onClick={ () => { setIsEntered(false); } }>
						Add Quote
					</button>
				</div>
			</Wrapper>
		</React.Fragment>
	);

};

// Styled
const Wrapper = styled.form`
	position: relative;
	.loading{
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.controlQuotes{
		margin-bottom: 0.5rem;
		label{
			font-weight: bold;
			display: block;
			margin-bottom: 0.5rem;
		}
		input, textarea{
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
	.actionsQuotes{
		text-align: right;
		button{
			font-size: 1.25rem;
		}
	}
`;

// Export
export default QuotesForm;