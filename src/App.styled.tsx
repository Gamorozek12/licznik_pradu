import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
	html, body, #root {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: #353f4d;
	}
`;

export const AppContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

export const Sidebar = styled.nav`
	width: 15%;
	min-width: 200px;
	height: 100%;
	padding: 20px;
	box-sizing: border-box;
	border-radius: 25%;
`;

export const MainContent = styled.main`
	width: 85%;
	height: 100%;
	padding: 15px;
	box-sizing: border-box;
	overflow-y: auto;
	border-radius: 15%;
`;
