import { GlobalStyle, AppContainer, Sidebar, MainContent } from "./App.styled";
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Sidebar>
          <Menu />
        </Sidebar>

        <MainContent>
          <Content />
          <Footer />
        </MainContent>
      </AppContainer>
    </>
  );
}

export default App;
