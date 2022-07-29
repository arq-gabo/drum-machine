import React from "react";
import styled from "styled-components";

const FooterText = styled.h6`
	font-family: "Righteous", cursive;
	margin-bottom: 10px;
	color: #413f42;
`;

const Anchor = styled.a`
	text-decoration: none;
`;

const Footer = () => {
	return (
		<div>
			<FooterText>
				By José Gabriel Guerra For Free Code Camp -
				<Anchor href="https://github.com/arq-gabo/drum-machine" target="_blank">
					&nbsp;code in GitHub
				</Anchor>
			</FooterText>
		</div>
	);
};

export default Footer;
