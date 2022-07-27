import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DrumSoundNameContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	width: 120px;
	background-color: #413f42;
	color: #f7f7f7;
	position: absolute;
	padding: 0 10px;
	border-radius: 10px;
	bottom: 40px;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const DrumSoundName = ({ nameSound }) => {
	return (
		<DrumSoundNameContainer>
			<h4 id="display">{nameSound}</h4>
		</DrumSoundNameContainer>
	);
};

export default DrumSoundName;
