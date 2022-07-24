import React, { useState, useEffect } from "react";
import styled from "styled-components";

//Components
import drum from "../drum.png";
import DrumInstrument from "./DrumInstrument";
import PowerButton from "./PowerButton";
import RangeVolumen from "./RangeVolumen";

//Characteristics of each instrument
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
	//State of sound waves
	const [soundWaves1, setSoundWaves1] = useState(1);
	const [soundWaves2, setSoundWaves2] = useState(2);
	const [soundWaves3, setSoundWaves3] = useState(3);
	const [soundWaves4, setSoundWaves4] = useState(4);
	const [soundWaves5, setSoundWaves5] = useState(5);
	const [soundWaves6, setSoundWaves6] = useState(6);
	const [soundWaves7, setSoundWaves7] = useState(7);
	const [soundWaves8, setSoundWaves8] = useState(8);
	const [soundWaves9, setSoundWaves9] = useState(9);

	//State of temp name sound screen
	const [screenShow, setScreenShow] = useState(false);
	const [nameSound, setNameSound] = useState("");

	//State of volumen volumen level
	const [volumen, setVolumen] = useState(50);

	//Functions for show waves in each instrument
	const showWaves1 = () => {
		setSoundWaves1(Math.random());
		setNameSound(instrument.drumIntrument1.soundName);
		showScreen();
	};
	const showWaves2 = () => {
		setSoundWaves2(Math.random());
		setNameSound(instrument.drumIntrument2.soundName);
		showScreen();
	};
	const showWaves3 = () => {
		setSoundWaves3(Math.random());
		setNameSound(instrument.drumIntrument3.soundName);
		showScreen();
	};
	const showWaves4 = () => {
		setSoundWaves4(Math.random());
		setNameSound(instrument.drumIntrument4.soundName);
		showScreen();
	};
	const showWaves5 = () => {
		setSoundWaves5(Math.random());
		setNameSound(instrument.drumIntrument5.soundName);
		showScreen();
	};
	const showWaves6 = () => {
		setSoundWaves6(Math.random());
		setNameSound(instrument.drumIntrument6.soundName);
		showScreen();
	};
	const showWaves7 = () => {
		setSoundWaves7(Math.random());
		setNameSound(instrument.drumIntrument7.soundName);
		showScreen();
	};
	const showWaves8 = () => {
		setSoundWaves8(Math.random());
		setNameSound(instrument.drumIntrument8.soundName);
		showScreen();
	};
	const showWaves9 = () => {
		setSoundWaves9(Math.random());
		setNameSound(instrument.drumIntrument9.soundName);
		showScreen();
	};

	// For managing waves and sound on the keyboard
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

	// Function for show name sound in time laps
	const showScreen = () => {
		setScreenShow(true);
		setTimeout(() => {
			setScreenShow(false);
		}, 2500);
	};

	//Function for adjust volumen level
	const handleVolumen = e => {
		setVolumen(e.target.value);
	};

	return (
		<DrumContainer>
			<DrumControl>
				<PowerButton />
				<RangeVolumen valVolumen={volumen} handleVolumen={handleVolumen} />
			</DrumControl>
			<img src={drum} alt="drum"></img>
			<DrumInstrument
				drumProps={instrument.drumIntrument1}
				waveSound={showWaves1}
				key={soundWaves1}
				valVolumen={volumen}
			/>
			<DrumInstrument
				drumProps={instrument.drumIntrument2}
				waveSound={showWaves2}
				key={soundWaves2}
				valVolumen={volumen}
			/>
			<DrumInstrument
				drumProps={instrument.drumIntrument3}
				waveSound={showWaves3}
				key={soundWaves3}
				valVolumen={volumen}
			/>
			<DrumInstrument
				drumProps={instrument.drumIntrument4}
				waveSound={showWaves4}
				key={soundWaves4}
				valVolumen={volumen}
			/>
			<DrumInstrument
				drumProps={instrument.drumIntrument5}
				waveSound={showWaves5}
				key={soundWaves5}
				valVolumen={volumen}
			/>
			<DrumInstrument
				drumProps={instrument.drumIntrument6}
				waveSound={showWaves6}
				key={soundWaves6}
				valVolumen={volumen}
			/>
			<DrumInstrument
				drumProps={instrument.drumIntrument7}
				waveSound={showWaves7}
				key={soundWaves7}
				valVolumen={volumen}
			/>
			<DrumInstrument
				drumProps={instrument.drumIntrument8}
				waveSound={showWaves8}
				key={soundWaves8}
				valVolumen={volumen}
			/>
			<DrumInstrument
				drumProps={instrument.drumIntrument9}
				waveSound={showWaves9}
				key={soundWaves9}
				valVolumen={volumen}
			/>
			{screenShow && <DrumSoundScreen nameSound={nameSound} />}
		</DrumContainer>
	);
};

export default Drum;
