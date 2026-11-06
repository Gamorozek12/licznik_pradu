import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
	html, body, #root {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		background-color: #353f4d;
	}

	html, body, #root, input, select{
		font-family: "Courier New";
	}
`;

export const AppContainer = styled.div`
	display: grid;
	grid-template-columns: 15% 85%;
	width: 100%;
	height: 100%;
`;

export const Sidebar = styled.nav`
	overflow: hidden;
	padding: 20px;
`;

export const MainContent = styled.main`
	display: grid;
	padding: 15px;
	grid-template-rows: 95% 5%;
`;

export const FooterStyled = styled.footer`
	width: 100%;
`;
