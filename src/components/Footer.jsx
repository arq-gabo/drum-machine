import React from "react";
import styled from "styled-components";

const FooterText = styled.h6`
	font-family: "Righteous", cursive;
	margin-bottom: 10px;
	color: #413f42;
`;

const Footer = () => {
	return (
		<div>
			<FooterText>By José Gabriel Guerra For Free Code Camp</FooterText>
		</div>
	);
};

export default Footer;
