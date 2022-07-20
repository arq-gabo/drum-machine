import React from "react";
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
	return (
		<VolumenContainer>
			<TextVolumen>Volumen</TextVolumen>
			<VolumenRange>
				<TextVolumen>0</TextVolumen>
				<input type="range" step="10" />
				<TextVolumen>10</TextVolumen>
			</VolumenRange>
			<TextVolumen>10</TextVolumen>
		</VolumenContainer>
	);
};

export default RangeVolumen;
