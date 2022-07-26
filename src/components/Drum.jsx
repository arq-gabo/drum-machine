import React, { useState, useEffect } from "react";
import styled from "styled-components";

//Components
import drum from "../drum.png";
import DrumInstrument from "./DrumInstrument";
import PowerButton from "./PowerButton";
import RangeVolumen from "./RangeVolumen";

//Characteristics of each instrument
import * as instrument from "./drumInstrument";
import DrumSoundName from "./DrumSoundName";

const DrumContainer = styled.div`
	position: relative;
	text-align: center;
`;

const DrumPower = styled.div`
	position: absolute;
	top: 30px;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const DrumVolumen = styled.div`
	position: absolute;
	top: 80px;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Drum = () => {
	//State of power botton
	const [power, setPower] = useState(false);

	//State of volumen level
	const [volumen, setVolumen] = useState(0);

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

	//State of name sound
	const [nameSound, setNameSound] = useState("");

	//Functions for show waves in each instrument
	const showWaves1 = () => {
		setSoundWaves1(Math.random());
		setNameSound(instrument.drumIntrument1.soundName);
	};
	const showWaves2 = () => {
		setSoundWaves2(Math.random());
		setNameSound(instrument.drumIntrument2.soundName);
	};
	const showWaves3 = () => {
		setSoundWaves3(Math.random());
		setNameSound(instrument.drumIntrument3.soundName);
	};
	const showWaves4 = () => {
		setSoundWaves4(Math.random());
		setNameSound(instrument.drumIntrument4.soundName);
	};
	const showWaves5 = () => {
		setSoundWaves5(Math.random());
		setNameSound(instrument.drumIntrument5.soundName);
	};
	const showWaves6 = () => {
		setSoundWaves6(Math.random());
		setNameSound(instrument.drumIntrument6.soundName);
	};
	const showWaves7 = () => {
		setSoundWaves7(Math.random());
		setNameSound(instrument.drumIntrument7.soundName);
	};
	const showWaves8 = () => {
		setSoundWaves8(Math.random());
		setNameSound(instrument.drumIntrument8.soundName);
	};
	const showWaves9 = () => {
		setSoundWaves9(Math.random());
		setNameSound(instrument.drumIntrument9.soundName);
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

	// Function for managing switch ON/OFF
	const handlePower = () => {
		setPower(!power);
		!power ? setTimeout(() => setVolumen(50), 100) : setVolumen(0);
		if (power) setNameSound("");
	};

	//Function for adjust volumen level
	const handleVolumen = e => {
		setVolumen(e.target.value);
	};

	return (
		<DrumContainer>
			<DrumPower>
				<PowerButton checked={power} handlePower={handlePower} />
			</DrumPower>

			{power && (
				<DrumVolumen>
					<RangeVolumen valVolumen={volumen} handleVolumen={handleVolumen} />
				</DrumVolumen>
			)}

			<img src={drum} alt="drum"></img>

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument1}
					waveSound={showWaves1}
					key={soundWaves1}
					valVolumen={volumen}
				/>
			)}

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument2}
					waveSound={showWaves2}
					key={soundWaves2}
					valVolumen={volumen}
				/>
			)}

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument3}
					waveSound={showWaves3}
					key={soundWaves3}
					valVolumen={volumen}
				/>
			)}

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument4}
					waveSound={showWaves4}
					key={soundWaves4}
					valVolumen={volumen}
				/>
			)}

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument5}
					waveSound={showWaves5}
					key={soundWaves5}
					valVolumen={volumen}
				/>
			)}

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument6}
					waveSound={showWaves6}
					key={soundWaves6}
					valVolumen={volumen}
				/>
			)}

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument7}
					waveSound={showWaves7}
					key={soundWaves7}
					valVolumen={volumen}
				/>
			)}

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument8}
					waveSound={showWaves8}
					key={soundWaves8}
					valVolumen={volumen}
				/>
			)}

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument9}
					waveSound={showWaves9}
					key={soundWaves9}
					valVolumen={volumen}
				/>
			)}
			{nameSound !== "" && <DrumSoundName nameSound={nameSound} />}
		</DrumContainer>
	);
};

export default Drum;
