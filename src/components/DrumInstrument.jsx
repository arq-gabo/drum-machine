import React from "react";
import styled, { keyframes } from "styled-components";

const DrumWithStyle = styled.div`
	display: flex;
	position: absolute;
	width: ${({ drumStyle }) => drumStyle.width};
	height: ${({ drumStyle }) => drumStyle.height};
	top: ${({ drumStyle }) => drumStyle.top};
	left: ${({ drumStyle }) => drumStyle.left};
	//background-color: ${({ drumStyle }) => drumStyle.backgroundColor};
	cursor: pointer;
`;

const DrumLetter = styled.h3`
	color: #f7f7f7;
	background-color: #413f42;
	padding: 7px;
	border-radius: 50%;
`;

const WaveContainer = styled.div`
	width: 100%;
	height: 100%;
	//background-color: grey;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	//opacity: 0.3;
`;

const waves = keyframes`
	from{
		width: 0%;
		height: 0%;
		opacity: 1;
	}
	to {
		width: 100%;
		height: 100%;
		opacity: 0;
	}
`;

const Wave = styled.div`
	background-color: black;
	border-radius: 50%;
	animation-name: ${waves};
	animation-duration: 0.5s;
`;

const DrumInstrument = props => {
	return (
		<DrumWithStyle drumStyle={props.drumProps} onClick={props.waveSound}>
			<div>
				<DrumLetter>{props.drumProps.keyBtn.toUpperCase()}</DrumLetter>
			</div>
			<WaveContainer>
				<Wave />
			</WaveContainer>
		</DrumWithStyle>
	);
};

export default DrumInstrument;
