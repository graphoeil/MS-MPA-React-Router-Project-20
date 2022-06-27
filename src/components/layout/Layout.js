// Imports
import React from "react";
import styled from "styled-components";
import MainNavigation from "./MainNavigation";

// Component
const Layout = ({ children }) => {

	// Return
	return(
		<React.Fragment>
			<MainNavigation/>
			<Wrapper>
				{ children }
			</Wrapper>
		</React.Fragment>
	);

};

// Styled
const Wrapper = styled.main`
	margin: 3rem auto;
	width: 90%;
	max-width: 40rem;
`;

// Export
export default Layout;