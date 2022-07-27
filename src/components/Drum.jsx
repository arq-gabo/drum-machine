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
	const [power, setPower] = useState(true);

	//State of volumen level
	const [volumen, setVolumen] = useState(50);

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

	// Function for managing switch ON/OFF
	const handlePower = () => {
		setPower(!power);
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
					keyVal={soundWaves1}
					valVolumen={volumen}
				/>
			)}

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument2}
					waveSound={showWaves2}
					keyVal={soundWaves2}
					valVolumen={volumen}
				/>
			)}

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument3}
					waveSound={showWaves3}
					keyVal={soundWaves3}
					valVolumen={volumen}
				/>
			)}

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument4}
					waveSound={showWaves4}
					keyVal={soundWaves4}
					valVolumen={volumen}
				/>
			)}

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument5}
					waveSound={showWaves5}
					keyVal={soundWaves5}
					valVolumen={volumen}
				/>
			)}

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument6}
					waveSound={showWaves6}
					keyVal={soundWaves6}
					valVolumen={volumen}
				/>
			)}

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument7}
					waveSound={showWaves7}
					keyVal={soundWaves7}
					valVolumen={volumen}
				/>
			)}

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument8}
					waveSound={showWaves8}
					keyVal={soundWaves8}
					valVolumen={volumen}
				/>
			)}

			{power && (
				<DrumInstrument
					drumProps={instrument.drumIntrument9}
					waveSound={showWaves9}
					keyVal={soundWaves9}
					valVolumen={volumen}
				/>
			)}
			{power && <DrumSoundName nameSound={nameSound} />}
		</DrumContainer>
	);
};

export default Drum;
