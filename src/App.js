import GlobalStyle from './components/GlobalStyle';
import Home from './components/pages/Home/Home';
import Theme from './components/Theme';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Home />
    </Theme>
  );
}

export default App;
