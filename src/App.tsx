import { GlobalStyle, AppContainer, Sidebar, MainContent } from './App.styled';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Sidebar>
          <Menu/>
        </Sidebar>
        
        <MainContent>
          <Content/>
          <Footer/>
        </MainContent>
        
      </AppContainer>
    </>
  );
}

export default App;
