import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

import * as instrument from "./drumInstrument";

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
	useEffect(() => {
		let levelSound = document.getElementById(
			props.drumProps.keyBtn.toUpperCase()
		);
		levelSound.volume = props.valVolumen / 100;
	}, [props.valVolumen]);

	useEffect(() => {
		document.addEventListener("keydown", keyEvent);

		return () => document.removeEventListener("keydown", keyEvent);
	}, []);

	function handleClick() {
		playSound();
		props.waveSound();
	}

	const playSound = () => {
		const sound = document.getElementById(props.drumProps.keyBtn.toUpperCase());
		sound.play();
	};

	const keyEvent = e => {
		if (e.keyCode === props.drumProps.keyCode) {
			handleClick();
		}
	};

	return (
		<DrumWithStyle
			id={props.drumProps.id}
			className="drum-pad"
			drumStyle={props.drumProps}
			onClick={handleClick}
		>
			<audio
				id={props.drumProps.keyBtn.toUpperCase()}
				className="clip"
				src={props.drumProps.url}
				//ref={audioLevel}
			/>
			<div>
				<DrumLetter>{props.drumProps.keyBtn.toUpperCase()}</DrumLetter>
			</div>
			<WaveContainer>
				<Wave key={props.keyVal} />
			</WaveContainer>
		</DrumWithStyle>
	);
};

export default DrumInstrument;
