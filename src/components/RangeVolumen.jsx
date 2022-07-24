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
	margin: 0 5px;
`;

const RangeVolumen = props => {
	return (
		<VolumenContainer>
			<TextVolumen>Volumen</TextVolumen>
			<VolumenRange>
				<TextVolumen>Min</TextVolumen>
				<input
					type="range"
					step="10"
					value={props.valVolumen}
					onChange={props.handleVolumen}
				/>
				<TextVolumen>Max</TextVolumen>
			</VolumenRange>
			<TextVolumen>{props.valVolumen}</TextVolumen>
		</VolumenContainer>
	);
};

export default RangeVolumen;
