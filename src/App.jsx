import React from "react";

import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import Drum from "./components/Drum";

const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

function App() {
	return (
		<Container className="App" id="drum-machine">
			<Header />
			<Drum />
			<Footer />
		</Container>
	);
}

export default App;
