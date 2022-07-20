import React, { Component } from "react";
import styled from "styled-components";
import Switch from "react-switch";

// Repository used in this switch https://github.com/markusenglund/react-switch

const SwitchText = styled.span`
	margin-right: 5px;
	color: #413f42;
	font-weight: bold;
`;

class PowerButton extends Component {
	constructor() {
		super();
		this.state = { checked: false };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(checked) {
		this.setState({ checked });
	}

	render() {
		return (
			<label>
				<SwitchText>Power</SwitchText>
				<Switch
					checked={this.state.checked}
					onChange={this.handleChange}
					onColor="#413F42"
					offColor="#413F42"
					onHandleColor="#F7F7F7"
					offHandleColor="#F7F7F7"
					handleDiameter={15}
					uncheckedIcon={
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								height: "100%",
								fontSize: 10,
								color: "#F7F7F7",
								paddingRight: 2
							}}
						>
							Off
						</div>
					}
					checkedIcon={
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								height: "100%",
								fontSize: 10,
								color: "#F7F7F7",
								paddingRight: 2
							}}
						>
							On
						</div>
					}
					boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
					activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
					height={20}
					width={45}
				/>
			</label>
		);
	}
}

export default PowerButton;
