// Imports
import React from "react";
import styled from "styled-components";

// Component
const LoadingSpinner = () => {

	// Return
	return <Wrapper/>;

};

// Styled
const Wrapper = styled.div`
	display: inline-block;
	width: 80px;
	height: 80px;
	&::after{
		content: ' ';
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid teal;
		border-color: teal transparent teal transparent;
		animation: spinner 1.2s linear infinite;
	}
	@keyframes spinner{
		0%{ transform: rotate(0deg); }
		100%{ transform: rotate(360deg); }
	}
`;

// Export
export default LoadingSpinner;