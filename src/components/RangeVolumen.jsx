import React, { useState } from "react";
import styled from "styled-components";
import "./RangeVolumen.css";

const VolumenContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 15px;
`;

const VolumenRange = styled.div`
	display: flex;
	width: 230px;
	justify-content: space-between;
	align-items: center;
`;

const TextVolumen = styled.span`
	color: #413f42;
	font-weight: bold;
`;

const RangeVolumen = () => {
	const [volumen, setVolumen] = useState(50);

	const handleChange = e => {
		setVolumen(e.target.value);
	};

	return (
		<VolumenContainer>
			<TextVolumen>Volumen</TextVolumen>
			<VolumenRange>
				<TextVolumen>Min</TextVolumen>
				<input type="range" step="10" value={volumen} onChange={handleChange} />
				<TextVolumen>Max</TextVolumen>
			</VolumenRange>
			<TextVolumen>{volumen}</TextVolumen>
		</VolumenContainer>
	);
};

export default RangeVolumen;
