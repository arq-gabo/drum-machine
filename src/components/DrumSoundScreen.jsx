import React from "react";
import styled from "styled-components";

const DrumScreenContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	width: auto;
	background-color: #413f42;
	color: #f7f7f7;
	position: absolute;
	padding: 0 10px;
	border-radius: 10px;
	bottom: 40px;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const DrumSoundScreen = () => {
	return (
		<DrumScreenContainer>
			<h4>DrumSoundScreen</h4>
		</DrumScreenContainer>
	);
};

export default DrumSoundScreen;
