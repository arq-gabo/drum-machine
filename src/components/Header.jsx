import React from "react";
import styled from "styled-components";

const HeaderText = styled.h1`
	font-family: "Righteous", cursive;
	margin-top: 15px;
	color: #413f42;
`;

const Header = () => {
	return (
		<div>
			<header>
				<HeaderText>Drum Machine</HeaderText>
			</header>
		</div>
	);
};

export default Header;
