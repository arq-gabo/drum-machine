import React, { useState, useEffect } from "react";
import styled from "styled-components";

import drum from "../drum.png";
import DrumInstrument from "./DrumInstrument";
import PowerButton from "./PowerButton";
import RangeVolumen from "./RangeVolumen";

import * as instrument from "./drumInstrument";
import DrumSoundScreen from "./DrumSoundScreen";

const DrumContainer = styled.div`
	position: relative;
	text-align: center;
`;

const DrumControl = styled.div`
	position: absolute;
	top: 60px;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Drum = () => {
	const [sound1, setSound1] = useState(1);
	const [sound2, setSound2] = useState(2);
	const [sound3, setSound3] = useState(3);
	const [sound4, setSound4] = useState(4);
	const [sound5, setSound5] = useState(5);
	const [sound6, setSound6] = useState(6);
	const [sound7, setSound7] = useState(7);
	const [sound8, setSound8] = useState(8);
	const [sound9, setSound9] = useState(9);

	const [screenShow, setScreenShow] = useState(false);

	const showWaves1 = () => setSound1(Math.random());
	const showWaves2 = () => setSound2(Math.random());
	const showWaves3 = () => setSound3(Math.random());
	const showWaves4 = () => setSound4(Math.random());
	const showWaves5 = () => setSound5(Math.random());
	const showWaves6 = () => setSound6(Math.random());
	const showWaves7 = () => setSound7(Math.random());
	const showWaves8 = () => setSound8(Math.random());
	const showWaves9 = () => setSound9(Math.random());

	const showScreen = () => {};

	useEffect(() => {
		const listener = e => {
			if (e.key === instrument.drumIntrument1.keyBtn) showWaves1();
			if (e.key === instrument.drumIntrument2.keyBtn) showWaves2();
			if (e.key === instrument.drumIntrument3.keyBtn) showWaves3();
			if (e.key === instrument.drumIntrument4.keyBtn) showWaves4();
			if (e.key === instrument.drumIntrument5.keyBtn) showWaves5();
			if (e.key === instrument.drumIntrument6.keyBtn) showWaves6();
			if (e.key === instrument.drumIntrument7.keyBtn) showWaves7();
			if (e.key === instrument.drumIntrument8.keyBtn) showWaves8();
			if (e.key === instrument.drumIntrument9.keyBtn) showWaves9();
		};
		document.addEventListener("keydown", listener);
		return () => {
			document.removeEventListener("keydown", listener);
		};
	}, []);

	return (
		<DrumContainer>
			<DrumControl>
				<PowerButton />
				<RangeVolumen />
			</DrumControl>
			<img src={drum} alt="drum"></img>
			<DrumInstrument
				drumProps={instrument.drumIntrument1}
				waveSound={showWaves1}
				key={sound1}
			/>
			<DrumInstrument
				drumProps={instrument.drumIntrument2}
				waveSound={showWaves2}
				key={sound2}
			/>
			<DrumInstrument
				drumProps={instrument.drumIntrument3}
				waveSound={showWaves3}
				key={sound3}
			/>
			<DrumInstrument
				drumProps={instrument.drumIntrument4}
				waveSound={showWaves4}
				key={sound4}
			/>
			<DrumInstrument
				drumProps={instrument.drumIntrument5}
				waveSound={showWaves5}
				key={sound5}
			/>
			<DrumInstrument
				drumProps={instrument.drumIntrument6}
				waveSound={showWaves6}
				key={sound6}
			/>
			<DrumInstrument
				drumProps={instrument.drumIntrument7}
				waveSound={showWaves7}
				key={sound7}
			/>
			<DrumInstrument
				drumProps={instrument.drumIntrument8}
				waveSound={showWaves8}
				key={sound8}
			/>
			<DrumInstrument
				drumProps={instrument.drumIntrument9}
				waveSound={showWaves9}
				key={sound9}
			/>
			{screenShow && <DrumSoundScreen />}
		</DrumContainer>
	);
};

export default Drum;
