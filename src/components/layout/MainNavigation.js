// Imports
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Component
const MainNavigation = () => {

	// Return
	return(
		<Wrapper>
			<div className="logo">
				<NavLink to="/">Router Quotes</NavLink>
			</div>
			<nav>
				<ul>
					<li>
						{/* NavLink activeClassName props add specific
						css class if it's active ,-) */}
						<NavLink activeClassName="active" to="/quotes?sort=asc">All quotes</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/new-quote">Add a quote</NavLink>
					</li>
				</ul>
			</nav>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.header`
	width: 100%;
	height: 5rem;
	display: flex;
	padding: 0 10%;
	justify-content: space-between;
	align-items: center;
	background-color: #008080;
	.logo{
		font-size: 2rem;
		color: white;
		a{
			text-decoration: none;
			color: #e6fcfc;
			&:hover, &:active{
				color: #88dfdf;
			}
		}
	}
	nav{
		ul{
			list-style: none;
			display: flex;
			margin: 0;
			padding: 0;
			li{
				margin-left: 1.5rem;
				font-size: 1.25rem;
				a{
					text-decoration: none;
					color: #88dfdf;
					&:hover, &:active, &.active{
						color: #e6fcfc;
					}
				}
			}
		}
	}
`;

// Export
export default MainNavigation;