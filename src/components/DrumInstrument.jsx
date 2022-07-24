import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const DrumWithStyle = styled.div`
	display: flex;
	position: absolute;
	width: ${({ drumStyle }) => drumStyle.width};
	height: ${({ drumStyle }) => drumStyle.height};
	top: ${({ drumStyle }) => drumStyle.top};
	left: ${({ drumStyle }) => drumStyle.left};
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
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
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
	const audioLevel = useRef();

	useEffect(() => {
		audioLevel.current.volume = props.valVolumen / 100;
	}, []);

	return (
		<DrumWithStyle drumStyle={props.drumProps} onClick={props.waveSound}>
			<div>
				<DrumLetter>{props.drumProps.keyBtn.toUpperCase()}</DrumLetter>
			</div>
			<WaveContainer>
				<Wave />
				<audio src={props.drumProps.url} ref={audioLevel} autoPlay />
			</WaveContainer>
		</DrumWithStyle>
	);
};

export default DrumInstrument;
